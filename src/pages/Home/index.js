import React, { useCallback, useContext, useRef, useState } from 'react';

import {
    Container,
    Header,
    BtnFilter,
    Areainput,
    AreaIcon,
    SearchInput,
    txtNotData,
    AreaName,
    TxtName,
    TxtGreetings,
    TxtWelcome,
    ImageUser,
    TxtSugestion,
    Txtcategory,
    AreaDates,
    BtnDate,
    TxtDateIni,
    TxtDateFin,
    TxtDateSelected,
    TxtNotData,
    TitleModalize,
    TxtChoose,
    AreaButtons,
    ButtonChoose,
    TxtQtd,
    ButtonPrice,
    TxtPrice,
    FastInfo,
    ButtonFilter,
    TxtButton
} from './styles';

import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardCategory } from '../../components/CardCategory';
import { FlatList, View, Alert, TouchableOpacity } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Calendar, dataEntrada } from '../../components/Calendar';
import { Modalize } from 'react-native-modalize';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { AuthContext, userDataStoraged } from '../../hooks/auth';

import ImageUserProfile from '../../assets/ImageUser.png';
import { format } from 'date-fns';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';

let dateInitialFormatted;
let dateFinalFormatted;

export const Home = () => {

    const { getAllProperties, getByCategory, getPropByInterval } = useContext(AuthContext);

    useFocusEffect(useCallback(() => {

        getAllProps();

        setCategorySelected('Todos');

        // console.log(userDataStoraged.foto);

        setStateSearch(false);
        setpropsByInterval([]);

    }, []));


    const getAllProps = async () => {

        const response = await getAllProperties();
        setAllProps(response);
    };


    const [allProps, setAllProps] = useState([]);

    const [propsByInterval, setpropsByInterval] = useState([]);

    const [stateSearch, setStateSearch] = useState(false);

    const [calendarVisible, setCalendarVisible] = useState(false);

    const [heightModal, setHeightModal] = useState(heightPercentageToDP('70'));

    const [dateInitial, setDateInitial] = useState('');
    const [dateFinal, setDateFinal] = useState('');

    const [monthInitial, setMonthInitial] = useState();
    const [monthFinal, setMonthFinal] = useState();


    const [numBed, setNumBed] = useState(1);
    const [numBath, setNumBath] = useState(1);
    const [buttonActived, setButtonActived] = useState('');
    const [agreePet, setAgreePet] = useState(false);
    const [rest, setRest] = useState(false);
    const [suite, setSuite] = useState(false);


    const handleUserFilter = async () => {

        const dataFilter = {
            numBed,
            numBath,
            priceOrder: buttonActived,
            agreePet,
            rest,
            suite
        };

        const teste = await axios.post('http://10.0.4.41:8000/properties/filterprops', dataFilter);

        console.log(teste.data.allProps);

    };


    const handleUserSelectDate = (date) => {

        if (dateInitial == '') {

            let dateIniFormated = `${date.dateString}T03:00:00.000Z`;

            let dayInitial = format(new Date(dateIniFormated), 'dd');
            let monthInitial = format(new Date(dateIniFormated), 'MM');

            setDateInitial(dayInitial);
            setMonthInitial(monthInitial);

            dateInitialFormatted = dateIniFormated;
            dateInitialFormatted = dateIniFormated;

            setCalendarVisible(false);
            setHeightModal(heightPercentageToDP('70'));

            return
        };

        if (dateFinal == '') {
            let dateFinFormated = `${date.dateString}T03:00:00.000Z`;

            let dayFinal = format(new Date(dateFinFormated), 'dd');
            let monthFinal = format(new Date(dateFinFormated), 'MM');

            setDateFinal(dayFinal);
            setMonthFinal(monthFinal);

            dateFinalFormatted = dateFinFormated;
            dateFinalFormatted = dateFinFormated;

            setCalendarVisible(false);
            setHeightModal(heightPercentageToDP('70'));

            return
        }
    };


    const handleSelectedInitial = () => {
        setDateInitial('');
        setMonthInitial('');
        setCalendarVisible(true);
        setHeightModal(heightPercentageToDP('70'));
    };

    const handleSelectedFinal = () => {
        setDateFinal('');
        setMonthFinal('');
        setCalendarVisible(true);
        setHeightModal(heightPercentageToDP('70'));
    };

    const handleApplyFilter = async () => {

        if (Number(dateInitial) > Number(dateFinal)) {
            return Alert.alert('', 'Data de entrada deve ser maior ou igual à saída.');
        }

        if (dateInitial == '' || dateFinal == '') {
            return Alert.alert('Aviso', 'Favor selecionar o intervalo.');
        } else {

            let dates = {
                dataInicio: dateInitialFormatted,
                dataFim: dateFinalFormatted
            };

            const result = await getPropByInterval(dates);

            if (result.props) {
                setpropsByInterval(result.props);
            }

            if (result.message == "Não foram encontrados imóveis disponíveis neste intervalo.") {
                return Alert.alert(result.message);
            }

            FilterModal.current?.close();
        }
    };


    // console.log(categorySelected);

    const categories = [
        { title: 'Wifi' },
        { title: 'Restaurante' },
        { title: 'Ar Cond.' },
        { title: 'Suíte' },
    ]

    const Navigation = useNavigation();

    const FilterModal = useRef(true);

    const [categorySelected, setCategorySelected] = useState('Todos');

    const [searchInput, setSearchInput] = useState();

    const handleEnterProp = (item) => {
        Navigation.navigate('HotelDescription', { item });
    };

    const handleUserSearch = async () => {

        let response = await getAllProperties();

        const data = response.filter(item => item.nome.match(searchInput));

        setAllProps(data);
        setStateSearch(true);
    };


    const handleSelectCategory = async (item) => {

        setCategorySelected(item.title);

        if (item.title == 'Todos') {
            setStateSearch(false);
            return getAllProps();
        };

        const response = await getByCategory(item.title);

        setAllProps(response.propsWithCategory);


        setStateSearch(true);
    };


    const handleFilterActived = () => {
        FilterModal.current?.open();
        setButtonActived('');
        setCalendarVisible(false);
        setHeightModal(heightPercentageToDP('70'));
        setDateInitial('');
        setMonthInitial('');
        setDateFinal('');
        setMonthFinal('');
        setNumBed(1);
        setNumBath(1);
        setButtonActived('Todos');
        setAgreePet(false);
        setRest(false);
        setSuite(false);
    };


    return (
        <Container>

            <AreaName>
                <View style={{ flexDirection: 'row' }}>
                    <TxtGreetings>Olá, </TxtGreetings>
                    <TxtName>{userDataStoraged.nome}</TxtName>
                </View>

                <ImageUser source={userDataStoraged.foto != null ? { uri: `data:image/png;base64,${userDataStoraged.foto}` } : ImageUserProfile} />

            </AreaName>

            <TxtWelcome>Seja bem-vindo(a)</TxtWelcome>

            <Header>
                <BtnFilter onPress={handleFilterActived}>
                    <Octicons name="settings" size={RFValue(23)} color={theme.colors.white} />
                </BtnFilter>

                <Areainput>
                    <AreaIcon>
                        <Ionicons onPress={handleUserSearch} name="search" size={RFValue(20)} color={theme.colors.gray} />
                    </AreaIcon>
                    <SearchInput onChangeText={text => setSearchInput(text)} placeholder='Pesquise aqui...' style={{ fontSize: RFValue(14), marginLeft: widthPercentageToDP('2'), color: theme.colors.gray }} />
                </Areainput>
            </Header>

            <View style={{ paddingBottom: widthPercentageToDP('2') }}>
                {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginLeft: widthPercentageToDP('3.7') }}>
                    <CardCategory onpress={() => title={'Internet'} />
                    <CardCategory onpress={() => setActive(oldValue => !oldValue)} actived={active} title={'Restaurante'} />
                    <CardCategory onpress={() => setActive(oldValue => !oldValue)} actived={active} title={'Ar Cond.'} />
                </ScrollView> */}


                <Txtcategory>Categorias</Txtcategory>

                <FlatList
                    keyExtractor={item => String(item.title)}
                    data={[{ title: 'Todos' }, ...categories]}
                    horizontal
                    contentContainerStyle={{ paddingLeft: widthPercentageToDP('5'), paddingRight: widthPercentageToDP('7') }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardCategory title={item.title} onpress={() => handleSelectCategory(item)} actived={categorySelected == item.title} />
                    )}
                />



                {
                    allProps == []

                    && <txtNotData>Opss, não encontramos</txtNotData>
                }

            </View>

            <TxtSugestion>{stateSearch ? 'Resultado' : 'Sugestões'}</TxtSugestion>

            <FlatList
                keyExtractor={(item) => String(item._id)}
                data={propsByInterval.length > 1 ? propsByInterval : allProps}
                renderItem={({ item }) => (

                    <CardHotel title={item.nome} foto={item.fotos[0]} location={`${item.endereco.cidade}, ${item.endereco.estado}`} onpress={() => handleEnterProp(item)} />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ alignSelf: 'center' }}
                style={{ paddingLeft: widthPercentageToDP('6') }}
            />

            <Modalize ref={FilterModal} modalHeight={heightModal} scrollViewProps={{ showsVerticalScrollIndicator: false }} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>

                <TitleModalize>Busque imóveis do seu jeito 😃</TitleModalize>

                <View style={{ width: widthPercentageToDP('72'), flexDirection: 'row', marginTop: heightPercentageToDP('8'), alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TxtChoose>Nº de quartos: </TxtChoose>

                    <AreaButtons>
                        <ButtonChoose onPress={() => {
                            if (numBed == 1 || numBed < 1) {
                                return;
                            }
                            setNumBed(numBed - 1);
                        }}>
                            <MaterialIcons name="remove" size={RFValue(24)} color={theme.colors.white} />
                        </ButtonChoose>

                        <TxtQtd>{numBed}</TxtQtd>

                        <ButtonChoose onPress={() => setNumBed(numBed + 1)}>
                            <MaterialIcons name="add" size={RFValue(24)} color={theme.colors.white} />
                        </ButtonChoose>
                    </AreaButtons>
                </View>

                <View style={{ width: widthPercentageToDP('72'), flexDirection: 'row', marginTop: heightPercentageToDP('5'), alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TxtChoose>Nº de banheiros: </TxtChoose>

                    <AreaButtons>
                        <ButtonChoose onPress={() => {
                            if (numBath == 1 || numBath < 1) {
                                return;
                            }
                            setNumBath(numBath - 1);
                        }}>
                            <MaterialIcons name="remove" size={RFValue(24)} color={theme.colors.white} />
                        </ButtonChoose>

                        <TxtQtd>{numBath}</TxtQtd>

                        <ButtonChoose onPress={() => setNumBath(numBath + 1)}>
                            <MaterialIcons name="add" size={RFValue(24)} color={theme.colors.white} />
                        </ButtonChoose>
                    </AreaButtons>
                </View>

                <View style={{ width: widthPercentageToDP('72'), marginTop: heightPercentageToDP('5'), alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ marginLeft: widthPercentageToDP('4'), marginTop: heightPercentageToDP('1.5') }}>
                        <TxtChoose>Preço: </TxtChoose>
                    </View>

                    <View style={{ width: '100%', marginTop: heightPercentageToDP('2.5'), flexDirection: 'row', justifyContent: 'space-between' }}>

                        <ButtonPrice style={{ backgroundColor: buttonActived == 'Maior' ? theme.colors.blue : theme.colors.white }} onPress={() => setButtonActived('Maior')}>
                            <TxtPrice style={{ color: buttonActived == 'Maior' ? theme.colors.white : theme.colors.blue }}>Maior</TxtPrice>
                        </ButtonPrice>

                        <ButtonPrice style={{ backgroundColor: buttonActived == 'Menor' ? theme.colors.blue : theme.colors.white }} onPress={() => setButtonActived('Menor')}>
                            <TxtPrice style={{ color: buttonActived == 'Menor' ? theme.colors.white : theme.colors.blue }}>Menor</TxtPrice>
                        </ButtonPrice>

                    </View>

                </View>

                <FastInfo>
                    <TxtChoose>Aceitam Pets</TxtChoose>

                    <CheckBox
                        title={agreePet == false ? 'Não' : 'Sim'}
                        checkedIcon="check"
                        uncheckedIcon="close"
                        checkedColor={theme.colors.blue}
                        uncheckedColor={theme.colors.blue}
                        checked={agreePet}
                        onPress={() => setAgreePet(!agreePet)}
                        containerStyle={{ marginTop: heightPercentageToDP('2'), width: widthPercentageToDP('24'), alignSelf: 'center', backgroundColor: 'transparent', marginRight: widthPercentageToDP('5.5') }}
                    />

                </FastInfo>

                <View style={{ width: '100%', flexDirection: 'row', marginLeft: widthPercentageToDP('2') }}>

                    <FastInfo>
                        <TxtChoose>Restaurante</TxtChoose>

                        <CheckBox
                            title={rest == false ? 'Não' : 'Sim'}
                            checkedIcon="check"
                            uncheckedIcon="close"
                            checkedColor={theme.colors.blue}
                            uncheckedColor={theme.colors.blue}
                            checked={rest}
                            onPress={() => setRest(!rest)}
                            containerStyle={{ marginTop: heightPercentageToDP('2'), width: widthPercentageToDP('24'), alignSelf: 'center', backgroundColor: 'transparent', marginRight: widthPercentageToDP('5.5') }}
                        />

                    </FastInfo>

                    <FastInfo>
                        <TxtChoose>Suíte</TxtChoose>

                        <CheckBox
                            title={suite == false ? 'Não' : 'Sim'}
                            checkedIcon="check"
                            uncheckedIcon="close"
                            checkedColor={theme.colors.blue}
                            uncheckedColor={theme.colors.blue}
                            checked={suite}
                            onPress={() => setSuite(!suite)}
                            containerStyle={{ marginTop: heightPercentageToDP('2'), width: widthPercentageToDP('24'), alignSelf: 'center', backgroundColor: 'transparent', marginRight: widthPercentageToDP('5.5') }}
                        />

                    </FastInfo>

                </View>

                <ButtonFilter onPress={handleUserFilter}>
                    <TxtButton>Filtrar</TxtButton>
                </ButtonFilter>

            </Modalize>

            {/* <Modalize ref={FilterModal} modalHeight={heightModal} scrollViewProps={{ showsVerticalScrollIndicator: false }} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>

                <View style={{ flexDirection: 'row' }}>
                    <TxtDateIni>Entrada:</TxtDateIni>

                    <TxtDateFin>Saída:</TxtDateFin>
                </View>

                <AreaDates>

                    <BtnDate onPress={handleSelectedInitial}>
                        {
                            dateInitial

                                ? <>
                                    <TxtDateSelected>{monthInitial == '01' ? 'Jan' : monthInitial == '02' ? 'Fev' : monthInitial == '03' ? 'Mar' : monthInitial == '04' ? 'Abr' : monthInitial == '05' ? 'Mai' : monthInitial == '06' ? 'Jun' : monthInitial == '07' ? 'Jul' : monthInitial == '08' ? 'Ago' : monthInitial == '09' ? 'Set' : monthInitial == '10' ? 'Out' : monthInitial == '11' ? 'Nov' : 'Dez'}</TxtDateSelected>
                                    <TxtDateSelected>{dateInitial}</TxtDateSelected>
                                </>

                                : <MaterialIcons name="add-alarm" size={RFValue(30)} color={theme.colors.dark} />
                        }
                    </BtnDate>

                    <BtnDate onPress={handleSelectedFinal}>
                        {
                            dateFinal

                                ? <>
                                    <TxtDateSelected>{monthFinal == '01' ? 'Jan' : monthFinal == '02' ? 'Fev' : monthFinal == '03' ? 'Mar' : monthFinal == '04' ? 'Abr' : monthFinal == '05' ? 'Mai' : monthFinal == '06' ? 'Jun' : monthFinal == '07' ? 'Jul' : monthFinal == '08' ? 'Ago' : monthFinal == '09' ? 'Set' : monthFinal == '10' ? 'Out' : monthFinal == '11' ? 'Nov' : 'Dez'}</TxtDateSelected>
                                    <TxtDateSelected>{dateFinal}</TxtDateSelected>
                                </>

                                : <MaterialIcons name="add-alarm" size={RFValue(30)} color={theme.colors.dark} />
                        }
                    </BtnDate>

                </AreaDates>
                {
                    calendarVisible &&
                    <Calendar ondaypress={(date) => handleUserSelectDate(date)} />
                }
                <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('4') }}>
                    <Button onpress={handleApplyFilter} title={'Aplicar Filtro'} />
                </View>

            </Modalize> */}


            {
                allProps.length < 1 && propsByInterval.length < 1

                && <TxtNotData>Ops, não temos nenhum imóvel no momento ☹️</TxtNotData>

            }

        </Container >
    );
}