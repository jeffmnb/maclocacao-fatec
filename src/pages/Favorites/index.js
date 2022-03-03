import React, { useCallback, useState } from 'react';

import {
    Container,
    Header,
    TxtLength,
    TxtWelcome,
    TxtNotData
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { FlatList, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Load } from '../../components/Load';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const Favorites = () => {

    const Navigation = useNavigation();

    const [hasValue, setHasValue] = useState(3);

    const [loading, setLoading] = useState(true);

    useFocusEffect(useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2700);
    }, []));


    if (loading) {
        return <Load />
    }
    return (
        <Container>

            <Header>
                <TxtWelcome>Veja abaixo os lugares {'\n'} que amou 💙</TxtWelcome>
            </Header>

            <TxtLength>Total: {hasValue}</TxtLength>

            {
                hasValue < 1 &&
                <TxtNotData>Ops, você ainda não gostou {'\n'} de nenhum imóvel ☹️</TxtNotData>
            }


            {
                hasValue > 0 &&

                <FlatList
                    keyExtractor={item => String(item)}
                    data={[0, 1, 2]}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: heightPercentageToDP('2') }}
                    renderItem={() => (
                        <CardHotel onpress={() => Navigation.navigate('HotelDescription')} />
                    )}
                />}

        </Container>
    );
}