import React, { useRef, useState } from 'react';

import {
    Container,
    Header,
    BtnFilter,
    Areainput,
    AreaIcon,
    SearchInput
} from './styles';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardCategory } from '../../components/CardCategory';
import { FlatList, ScrollView, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Calendar } from '../../components/Calendar';
import { Modalize } from 'react-native-modalize';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

    console.log(categorySelected);

    const categories = [
        { title: 'Internet' },
        { title: 'Restaurante' },
        { title: 'Ar Cond.' },
        { title: 'Suíte' },
    ]

    const Navigation = useNavigation();

    const FilterModal = useRef(false);

    const [categorySelected, setCategorySelected] = useState('');

    return (
        <Container>
            <Header>
                <BtnFilter onPress={() => FilterModal.current?.open()}>
                    <Ionicons name="filter" size={RFValue(23)} color={theme.colors.white} style={{ marginLeft: widthPercentageToDP('0.65'), marginTop: heightPercentageToDP('0.5') }} />
                </BtnFilter>

                <Areainput>
                    <AreaIcon>
                        <Ionicons name="search" size={RFValue(20)} color={theme.colors.gray} />
                    </AreaIcon>
                    <SearchInput placeholder='Pesquise aqui...' style={{ fontSize: RFValue(14), marginLeft: widthPercentageToDP('2'), color: theme.colors.gray }} />
                </Areainput>
            </Header>

            <View style={{ paddingBottom: widthPercentageToDP('2') }}>
                {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginLeft: widthPercentageToDP('3.7') }}>
                    <CardCategory onpress={() => title={'Internet'} />
                    <CardCategory onpress={() => setActive(oldValue => !oldValue)} actived={active} title={'Restaurante'} />
                    <CardCategory onpress={() => setActive(oldValue => !oldValue)} actived={active} title={'Ar Cond.'} />
                </ScrollView> */}

                <FlatList
                    keyExtractor={item => String(item.title)}
                    data={categories}
                    horizontal
                    contentContainerStyle={{paddingLeft:widthPercentageToDP('5'), paddingRight:widthPercentageToDP('7')}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardCategory title={item.title} onpress={() => setCategorySelected(item.title)} actived={categorySelected == item.title} />
                    )}
                />
            </View>

            <FlatList
                keyExtractor={(item) => String(item)}
                data={[0, 1, 2, 3]}
                renderItem={() => (

                    <CardHotel onpress={() => Navigation.navigate('HotelDescription')} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignSelf: 'center' }}
                style={{ marginBottom: heightPercentageToDP('25'), marginTop: heightPercentageToDP('2') }}
            />

            <Modalize ref={FilterModal} modalHeight={heightPercentageToDP('90')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: RFValue(10), paddingTop: '10%' }}>
                <Calendar />

                <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('4') }}>
                    <Button title={'Aplicar Filtro'} />
                </View>

            </Modalize>

        </Container>
    );
}