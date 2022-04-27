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
import { Alert, Animated, FlatList, TouchableOpacity, View } from 'react-native';
import { CardHotel } from '../../components/CardHotel';
import { Load } from '../../components/Load';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { AuthContext } from '../../hooks/auth';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Feather } from '@expo/vector-icons';

export const UserSchedules = () => {

    const Navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    const [cancel, setCancel] = useState();

    const [mySchedules, setMySchedules] = useState([]);

    useFocusEffect(useCallback(() => {
        setLoading(true);

        getSchedules();

        setTimeout(() => {
            setLoading(false);
        }, 2700);
    }, [cancel]));

    const { getAllSchedulesUser, cancelScheduleUser } = useContext(AuthContext);

    const getSchedules = async () => {
        const response = await getAllSchedulesUser();

        if (response.allSchedulesUser) {

            setMySchedules(response.allSchedulesUser);
            console.log(response.allSchedulesUser);
        }
    };


    const handlePressCancelSchedule = (item) => {
        Alert.alert('Aviso', 'Deseja cancelar este agendamento?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    const response = await cancelScheduleUser(item);

                    if (response.error == false) {
                        Alert.alert('Agendamento cancelado com sucesso!');
                        setCancel(true);
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
                <TxtWelcome>Seus Agendamentos</TxtWelcome>
            </Header>

            <AreaBtn>
                <BtnBack onPress={() => Navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={RFValue(28.5)} color={theme.colors.white} />
                </BtnBack>
            </AreaBtn>

            <TxtLength>Total: {mySchedules.length}</TxtLength>

            {
                mySchedules.length < 1 &&
                <TxtNotData>Ops, você ainda não possui {'\n'} nenhum Agendamento ☹️</TxtNotData>
            }


            {/* {
                mySchedules.length > 0 &&

                <FlatList
                    keyExtractor={item => String(item)}
                    data={mySchedules}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: heightPercentageToDP('2') }}
                    renderItem={({ item }) => (
                        <CardHotel foto={item.imovel.fotos[0]} title={item.imovel.nome} location={`${item.imovel.endereco.cidade}, ${item.imovel.endereco.estado}`} />
                    )}
                    contentContainerStyle={{ marginLeft: widthPercentageToDP('4.5') }}
                />
            } */}




            {
                mySchedules.length > 0 &&

                <FlatList
                    keyExtractor={item => String(item)}
                    data={mySchedules}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: heightPercentageToDP('2') }}
                    renderItem={({ item }) => (

                        <Swipeable overshootRight={false} renderRightActions={() => (

                            <TouchableOpacity onPress={() => handlePressCancelSchedule(item._id)} style={{ borderTopRightRadius: widthPercentageToDP('4'), borderBottomRightRadius: widthPercentageToDP('4'), justifyContent: 'center', alignItems: 'center', left: widthPercentageToDP('8'), backgroundColor: theme.colors.tomato, width: widthPercentageToDP('25'), height: heightPercentageToDP('28') }} >

                                <Feather name='trash' size={RFValue(35)} color={'#FFF'} style={{ left: widthPercentageToDP('1.1') }} />

                            </TouchableOpacity>
                        )}>

                            <CardHotel foto={item.imovel.fotos[0]} title={item.imovel.nome} location={`${item.imovel.endereco.cidade}, ${item.imovel.endereco.estado}`} />

                        </Swipeable>
                    )}
                    contentContainerStyle={{ marginLeft: widthPercentageToDP('4.5') }}
                />

            }



        </Container>
    );
}
