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
    Txtcategory
} from './styles';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardCategory } from '../../components/CardCategory';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Calendar } from '../../components/Calendar';
import { Modalize } from 'react-native-modalize';
import { Button } from '../../components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { AuthContext, userDataStoraged } from '../../hooks/auth';

export const Home = () => {

    const { getAllProperties, getByCategory } = useContext(AuthContext);


    useFocusEffect(useCallback(() => {

        getAllProps();

        setCategorySelected('Todos');

        // console.log(userDataStoraged.foto);

        setStateSearch(false);

    }, []));


    const getAllProps = async () => {

        const response = await getAllProperties();
        setAllProps(response);
    };


    const [allProps, setAllProps] = useState();

    const [stateSearch, setStateSearch] = useState(false);

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


    return (
        <Container>

            <AreaName>
                <View style={{ flexDirection: 'row' }}>
                    <TxtGreetings>Olá, </TxtGreetings>
                    <TxtName>{userDataStoraged.nome}</TxtName>
                </View>

                <ImageUser source={{ uri: `data:image/png;base64,${userDataStoraged.foto}` }} />

            </AreaName>

            <TxtWelcome>Seja bem-vindo(a)</TxtWelcome>

            <Header>
                <BtnFilter onPress={() => FilterModal.current?.open()}>
                    <Ionicons name="filter" size={RFValue(23)} color={theme.colors.white} style={{ marginLeft: widthPercentageToDP('0.65'), marginTop: heightPercentageToDP('0.5') }} />
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
                data={allProps}
                renderItem={({ item }) => (

                    <CardHotel title={item.nome} foto={item.fotos[0]} location={`${item.endereco.cidade}, ${item.endereco.estado}`} onpress={() => handleEnterProp(item)} />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ alignSelf: 'center' }}
                style={{ paddingLeft: widthPercentageToDP('6') }}
            />

            <Modalize ref={FilterModal} modalHeight={heightPercentageToDP('60')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>
                <Calendar />

                <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('4') }}>
                    <Button title={'Aplicar Filtro'} />
                </View>

            </Modalize>

        </Container>
    );
}