import React from 'react';
import { Text, TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Title,
    AreaInput
} from './styles';

import { MaterialIcons, FontAwesome, Ionicons, Foundation } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const MyInput = ({ placeholder, secure, onchangetext }) => {
    return (
        <Container>

            <AreaInput>
                {
                    placeholder == 'Email'
                        ? <MaterialIcons style={{ right: widthPercentageToDP('1') }} name="email" size={RFValue(19.5)} color={theme.colors.gray} />
                        : placeholder == 'Senha'
                            ? <FontAwesome style={{ marginRight: widthPercentageToDP('1.5') }} name="lock" size={RFValue(19.5)} color={theme.colors.gray} />
                            : placeholder == 'Confirmar Senha'
                                ? <FontAwesome style={{ marginRight: widthPercentageToDP('1.5') }} name="lock" size={RFValue(19.5)} color={theme.colors.gray} />
                                : placeholder == 'Nome'
                                    ? <FontAwesome style={{ marginRight: widthPercentageToDP('1.5') }} name="user" size={RFValue(19.5)} color={theme.colors.gray} />
                                    : placeholder == 'RG'
                                        ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="wallet" size={RFValue(19.5)} color={theme.colors.gray} />
                                        : placeholder == 'CPF'
                                            ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="wallet" size={RFValue(19.5)} color={theme.colors.gray} />
                                            : placeholder == 'Endereço'
                                                ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="ios-location-sharp" size={RFValue(20)} color={theme.colors.gray} />
                                                : placeholder == 'Número'
                                                    ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="ios-location-sharp" size={RFValue(20)} color={theme.colors.gray} />
                                                    : placeholder == 'Telefone (Ex. 14999...)'
                                                        ? <Foundation style={{ marginRight: widthPercentageToDP('1.5') }} name="telephone" size={RFValue(23.5)} color={theme.colors.gray} />
                                                        : placeholder == 'Telefone'
                                                        && <Foundation style={{ marginRight: widthPercentageToDP('1.5') }} name="telephone" size={RFValue(23.5)} color={theme.colors.gray} />
                }
                <TextInput onChangeText={onchangetext} secureTextEntry={secure} style={{ flex: 1, marginLeft: widthPercentageToDP('4'), fontSize: RFValue(14.5), color: theme.colors.gray }} placeholder={placeholder} placeholderTextColor={theme.colors.gray} />
            </AreaInput>

        </Container>
    );
}