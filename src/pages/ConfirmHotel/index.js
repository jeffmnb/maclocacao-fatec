import React, { useState } from 'react';

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

import { useNavigation } from '@react-navigation/native';

export const ConfirmHotel = () => {

    const Navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const handleConfirmCode = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Navigation.navigate('Home')
        }, 3000);
    }

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
                    <TitleAbout>9 Diárias</TitleAbout>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: heightPercentageToDP(2) }}>
                        <AreaDays>
                            <ValueDate>
                                <TxtDate>Jan</TxtDate>
                                <TxtDate>21</TxtDate>
                            </ValueDate>

                            <ValueDate>
                                <TxtDate>Jan</TxtDate>
                                <TxtDate>28</TxtDate>
                            </ValueDate>
                        </AreaDays>

                        <AreaHours>
                            <View style={{ marginTop: heightPercentageToDP('1'), marginBottom: heightPercentageToDP('2') }}>
                                <Label>Chegada: 21/01</Label>
                                <Hour>13:00 - 18:00</Hour>
                            </View>

                            <View>
                                <Label>Saída: 21/01</Label>
                                <Hour>13:00 - 18:00</Hour>
                            </View>

                        </AreaHours>
                    </View>
                </AreaAbout>


                <AreaDetails>
                    <TxtDetails>Detalhes</TxtDetails>

                    <View style={{ flexDirection: 'row', paddingHorizontal: widthPercentageToDP('7'), justifyContent: 'space-between' }}>
                        <TitleDetail>R$ 122,00 x 9 noites</TitleDetail>
                        <TxtPrice>R$ 1.098,00</TxtPrice>
                    </View>

                    <View style={{ marginTop: heightPercentageToDP('2.5'), alignSelf: 'center' }}>
                        <SimpleLineIcons name="arrow-down" size={RFValue(20)} color={theme.colors.gray} />
                    </View>

                    <View style={{ marginTop: heightPercentageToDP('2'), flexDirection: 'row', paddingHorizontal: widthPercentageToDP('7'), justifyContent: 'space-between' }}>
                        <TitleDetail>Total</TitleDetail>
                        <TxtPrice>R$ 1.098,00</TxtPrice>
                    </View>

                </AreaDetails>


                <View style={{ width: '100%', alignItems: 'center' }}>
                    <ButtonPay onpress={handleConfirmCode} type={'card'} title={'Pagar com cartão'} />

                    <ButtonPay title={'Pagar com Pix         '} />

                    <View style={{ marginTop: heightPercentageToDP('4') }}>
                        <Button title={'Cancelar'} onpress={() => Navigation.goBack()} />
                    </View>
                </View>

            </ScrollView>
        </Container>
    );
}