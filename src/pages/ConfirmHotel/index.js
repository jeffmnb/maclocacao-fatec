import React, { useCallback, useContext, useRef, useState } from 'react';

import {
    Container,
    Header,
    BtnBack,
    TxtTitle,
    AreaAbout,
    TitleAbout,
    AreaDays,
    ValueDate,
    AreaHours,
    Label,
    Hour,
    AreaDetails,
    TxtDetails,
    TxtDate,
    TitleDetail,
    TxtPrice,
    TxtSpace
} from './styles';

import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../theme';
import { Alert, ScrollView, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { Button } from '../../components/Button';
import { ButtonPay } from '../../components/ButtonPay';
import { Load } from '../../components/Load';

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { AuthContext, userDataStoraged } from '../../hooks/auth';
import { Modalize } from 'react-native-modalize';
import { Calendar } from '../../components/Calendar';

import { format, eachDayOfInterval, parseISO, isBefore } from 'date-fns';

let dateInitial = null;
let dateFinal = null;

export const ConfirmHotel = () => {

    const Navigation = useNavigation();

    const Routes = useRoute();

    const { item } = Routes.params;

    const { createNewSchedule } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [dateInitialStatus, setDateInitialStatus] = useState(null);
    const [dateFinalStatus, setDateFinalStatus] = useState(null);

    const [dayInitial, setDayInitial] = useState('');
    const [dayFinal, setDayFinal] = useState('');


    const [monthInitial, setMonthInitial] = useState('');
    const [monthFinal, setMoonthFinal] = useState('');

    const [numDaysInterval, setNumDaysInterval] = useState();

    const calendarInitialModal = useRef(false);
    const calendarFinalModal = useRef(false);

    useFocusEffect(useCallback(() => {
        dateInitial = null;
        dateFinal = null;
        setDateInitialStatus(false);
        setDateFinalStatus(false);
        setDayFinal();
    }, []));

    const handleConfirmCode = () => {

        if (dateInitial == null || dateFinal == null) {
            return Alert.alert('Aviso', 'Selecione as datas desejadas');
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Navigation.navigate('Home')
        }, 3000);
    };

    const handleConfirmSchedule = async () => {

        if (dateInitial == null || dateFinal == null) {
            return Alert.alert('Aviso', 'Selecione as datas desejadas');
        }

        const data = {
            imovel: item,
            dataInicio: dateInitial,
            dataFim: dateFinal,
            HorarioInicio: "12:00",
            HorarioFinal: "18:00",
            dadosLocatario: userDataStoraged,
            statusPagamento: false
        };

        const response = await createNewSchedule(data);

        if (response.newSchedule) {
            Alert.alert('Imóvel agendado com sucesso!');
            Navigation.navigate('Home');
        } else {
            Alert.alert(response.message);
            
        }
    };


    const handleUserInitialDateSelected = (date) => {

        let dateIniFormated = `${date.dateString}T03:00:00.000Z`;

        dateInitial = dateIniFormated;

        // console.log(dateInitial);

        if (dateInitial != null) {
            // console.log('Entrada: ' + dateInitial);
            setDateInitialStatus(true);

            let dayInitial = format(new Date(dateInitial), 'dd');
            let monthInitial = format(new Date(dateInitial), 'MM');

            setDayInitial(dayInitial);
            setMonthInitial(monthInitial);
            calendarInitialModal.current?.close();
        }
    };


    const handleUserFinalDateSelected = (date) => {

        let dateFinFormated = `${date.dateString}T03:00:00.000Z`;

        dateFinal = dateFinFormated;

        // console.log(date);

        if (dateFinal != null) {

            if (dateInitial == null) {
                return Alert.alert('Favor selecionar data de entrada');
            }

            if (isBefore(parseISO(dateFinal), parseISO(dateInitial))) {
                return Alert.alert('Data de saída deve ser menor');
            };

            // console.log(dateInitial);
            // console.log(dateFinal);

            setDateFinalStatus(true);/////////

            let dayFinal = format(new Date(dateFinal), 'dd');
            let monthFinal = format(new Date(dateFinal), 'MM');

            setDayFinal(dayFinal);
            setMoonthFinal(monthFinal);
            calendarFinalModal.current?.close();
        };

        let teste = eachDayOfInterval({
            start: parseISO(dateInitial),
            end: parseISO(dateFinal)
        });

        setNumDaysInterval(teste.length);
    };

    if (loading) {
        return <Load />
    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header>
                    <BtnBack onPress={() => Navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={RFValue(28.5)} color={theme.colors.white} />
                    </BtnBack>

                    <TxtTitle>RESUMO</TxtTitle>
                </Header>

                <AreaAbout>
                    <TitleAbout>{numDaysInterval} Diárias</TitleAbout>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: heightPercentageToDP(2) }}>
                        <AreaDays>
                            <ValueDate onPress={() => calendarInitialModal.current?.open()}>
                                {
                                    dateInitialStatus

                                        ? <>
                                            <TxtDate>{monthInitial == '01' ? 'Jan' : monthInitial == '02' ? 'Fev' : monthInitial == '03' ? 'Mar' : monthInitial == '04' ? 'Abr' : monthInitial == '05' ? 'Mai' : monthInitial == '06' ? 'Jun' : monthInitial == '07' ? 'Jul' : monthInitial == '08' ? 'Ago' : monthInitial == '09' ? 'Set' : monthInitial == '10' ? 'Out' : monthInitial == '11' ? 'Nov' : 'Dez'}</TxtDate>
                                            <TxtDate>{dayInitial}</TxtDate>
                                        </>

                                        : <MaterialIcons name="add-alarm" size={RFValue(26)} color={theme.colors.dark} />
                                }
                            </ValueDate>

                            <ValueDate onPress={() => calendarFinalModal.current?.open()}>
                                {
                                    dateFinalStatus

                                        ? <>
                                            <TxtDate>{monthFinal == '01' ? 'Jan' : monthFinal == '02' ? 'Fev' : monthFinal == '03' ? 'Mar' : monthFinal == '04' ? 'Abr' : monthFinal == '05' ? 'Mai' : monthFinal == '06' ? 'Jun' : monthFinal == '07' ? 'Jul' : monthFinal == '08' ? 'Ago' : monthFinal == '09' ? 'Set' : monthFinal == '10' ? 'Out' : monthFinal == '11' ? 'Nov' : 'Dez'}</TxtDate>
                                            <TxtDate>{dayFinal}</TxtDate>
                                        </>

                                        : <MaterialIcons name="add-alarm" size={RFValue(26)} color={theme.colors.dark} />
                                }
                            </ValueDate>
                        </AreaDays>

                        <AreaHours>
                            <View style={{ marginTop: heightPercentageToDP('1'), marginBottom: heightPercentageToDP('2') }}>
                                <Label>Chegada: {dayInitial}/{monthInitial}</Label>
                                <Hour>13:00 - 18:00</Hour>
                            </View>

                            <View>
                                <Label>Saída: {dayFinal}/{monthFinal} </Label>
                                <Hour>13:00 - 18:00</Hour>
                            </View>

                        </AreaHours>
                    </View>
                </AreaAbout>


                <AreaDetails>
                    <TxtDetails>Detalhes</TxtDetails>

                    <View style={{ flexDirection: 'row', paddingHorizontal: widthPercentageToDP('7'), justifyContent: 'space-between' }}>
                        <TitleDetail>R$ {item.price},00 x {numDaysInterval} noites</TitleDetail>
                        <TxtPrice>R$ {numDaysInterval != undefined ?  Number(item.price) * Number(numDaysInterval): 0},00</TxtPrice>
                    </View>

                    <View style={{ marginTop: heightPercentageToDP('2.5'), alignSelf: 'center' }}>
                        <SimpleLineIcons name="arrow-down" size={RFValue(20)} color={theme.colors.gray} />
                    </View>

                    <View style={{ marginTop: heightPercentageToDP('2'), flexDirection: 'row', paddingHorizontal: widthPercentageToDP('7'), justifyContent: 'space-between' }}>
                        <TitleDetail>Total</TitleDetail>
                        <TxtPrice>R$ {numDaysInterval != undefined ?  Number(item.price) * Number(numDaysInterval): 0},00</TxtPrice>
                    </View>

                </AreaDetails>


                <View style={{ width: '100%', alignItems: 'center' }}>
                    <ButtonPay onpress={handleConfirmSchedule} type={'card'} title={'Pagar com cartão'} />

                    <ButtonPay onpress={handleConfirmSchedule} title={'Pagar com Pix         '} />

                    <View style={{ marginTop: heightPercentageToDP('4') }}>
                        <Button title={'Cancelar'} onpress={() => Navigation.goBack()} />
                    </View>
                </View>

                <Modalize ref={calendarInitialModal} modalHeight={heightPercentageToDP('60')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>
                    <Calendar ondaypress={(date) => handleUserInitialDateSelected(date)} />

                    <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('4') }}>
                        <Button title={'Selecionar entrada'} />
                    </View>

                </Modalize>

                <Modalize ref={calendarFinalModal} modalHeight={heightPercentageToDP('60')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>
                    <Calendar ondaypress={(date) => handleUserFinalDateSelected(date)} />
                </Modalize>

            </ScrollView>
        </Container>
    );
}