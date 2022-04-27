import React, { useCallback, useContext, useState } from 'react';

import {
    Container,
    Header,
    TxtLength,
    TxtWelcome,
    TxtNotData
} from './styles';

import { FlatList, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Load } from '../../components/Load';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { AuthContext } from '../../hooks/auth';

export const Favorites = () => {

    const Navigation = useNavigation();

    const [hasValue, setHasValue] = useState(3);

    const [loading, setLoading] = useState(true);

    const [allFavorites, setAllFavorites] = useState([]);

    const { getAllFavorites } = useContext(AuthContext);

    useFocusEffect(useCallback(() => {
        setLoading(true);

        getFavorites();

        setTimeout(() => {
            setLoading(false);
        }, 2700);
    }, []));


    const getFavorites = async () => {
        const data = await getAllFavorites();
        console.log(data.favoriteProps);
        setAllFavorites(data.favoriteProps);
    };


    if (loading) {
        return <Load />
    }
    return (
        <Container>

            <Header>
                <TxtWelcome>Veja abaixo os lugares {'\n'} que amou 💙</TxtWelcome>
            </Header>

            <TxtLength>Total: {allFavorites.length}</TxtLength>

            {
                allFavorites < 1 &&
                <TxtNotData>Ops, você ainda não gostou {'\n'} de nenhum imóvel ☹️</TxtNotData>
            }


            {
                allFavorites.length > 0 &&

                <FlatList
                    keyExtractor={item => String(item._id)}
                    data={allFavorites}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: heightPercentageToDP('2'), paddingLeft: widthPercentageToDP('4.5') }}
                    renderItem={({ item }) => (
                        <CardHotel foto={item.fotos[0]} title={item.nome} location={`${item.endereco.cidade}, ${item.endereco.estado}`} onpress={() => Navigation.navigate('HotelDescription', { item })} />
                    )}
                />
            }

        </Container>
    );
}