import React, { useCallback, useContext, useState } from 'react';

import {
    Container,
    Header,
    TxtLength,
    TxtWelcome,
    TxtNotData,
    BtnBack,
    AreaBtn
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { Alert, FlatList, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Load } from '../../components/Load';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { AuthContext } from '../../hooks/auth';

export const UserProps = () => {

    const Navigation = useNavigation();

    const [hasValue, setHasValue] = useState(3);

    const [loading, setLoading] = useState(true);

    const [myProps, setMyProps] = useState([]);

    useFocusEffect(useCallback(() => {
        setLoading(true);

        getProps();

        setTimeout(() => {
            setLoading(false);
        }, 2700);

        console.log(myProps);
    }, []));

    const { getAllPropsByUser, deleteUserProp } = useContext(AuthContext);

    const getProps = async () => {
        const response = await getAllPropsByUser();

        if (response.propsUser) {
            setMyProps(response.propsUser);
        }
    };

    const handleClickProp = (item) => {
        Alert.alert('', 'Deseja deletar este imóvel?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    const result = await deleteUserProp(item._id);
                    if (result.error == false) {
                        Alert.alert('',result.message);
                    }
                }
            }
        ])
    };


    if (loading) {
        return <Load />
    }
    return (
        <Container>

            <Header>
                <TxtWelcome>Seus imóveis</TxtWelcome>
            </Header>

            <AreaBtn>
                <BtnBack onPress={() => Navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={RFValue(28.5)} color={theme.colors.white} />
                </BtnBack>
            </AreaBtn>

            <TxtLength>Total: {myProps.length}</TxtLength>

            {
                myProps.length < 1 &&
                <TxtNotData>Ops, você ainda não postou {'\n'} nenhum imóvel ☹️</TxtNotData>
            }


            {
                myProps.length > 0 &&

                <FlatList
                    keyExtractor={item => String(item._id)}
                    data={myProps}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: heightPercentageToDP('2') }}
                    renderItem={({ item }) => (
                        <CardHotel foto={item.fotos[0]} title={item.nome} location={`${item.endereco.cidade}, ${item.endereco.estado}`} onpress={() => handleClickProp(item)} />
                    )}
                    contentContainerStyle={{ marginLeft: widthPercentageToDP('4.5') }}
                />}

        </Container>
    );
}