import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import {
    Container,
    TxtTitle,
    ImgUser,
    TxtChangeImg,
    AreaEditImg,
    TxtContact,
    TxtTel,
    BtnEdit
} from './styles';

import { EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';

import ImageUer from '../../assets/ImageUser.png';

export const UserProfile = () => {
    return (
        <Container>
            <TxtTitle>MINHA CONTA</TxtTitle>

            <ImgUser style={{ alignSelf: 'center', marginTop: heightPercentageToDP('7') }} source={ImageUer} />
            <AreaEditImg>
                <TxtChangeImg>Editar</TxtChangeImg>
            </AreaEditImg>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: heightPercentageToDP('7'), alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <TxtContact>Telefone:</TxtContact>
                    <TxtTel>xxxxxxxxxxx</TxtTel>
                </View>

                <BtnEdit>
                    <EvilIcons name="pencil" size={RFValue(26)} color={theme.colors.blueStrong} />
                </BtnEdit>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: heightPercentageToDP('7'), alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <TxtContact>Email:</TxtContact>
                    <TxtTel>email@email.com</TxtTel>
                </View>

                <BtnEdit>
                    <EvilIcons name="pencil" size={RFValue(26)} color={theme.colors.blueStrong} />
                </BtnEdit>
            </View>

        </Container>
    );
}