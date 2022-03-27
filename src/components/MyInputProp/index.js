import React from 'react';
import { Text, TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Title,
    AreaInput
} from './styles';

import { MaterialCommunityIcons, FontAwesome, Ionicons, Foundation } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const MyInputProp = ({ placeholder, secure, onchangetext }) => {
    return (
        <Container>

            <AreaInput>
                {
                    placeholder == 'Nome'
                        ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="business" size={RFValue(19.5)} color={theme.colors.gray} />
                        : placeholder == 'Descrição'
                            ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="business" size={RFValue(19.5)} color={theme.colors.gray} />
                            : placeholder == 'Confirmar Senha'
                                ? <FontAwesome style={{ marginRight: widthPercentageToDP('1.5') }} name="lock" size={RFValue(19.5)} color={theme.colors.gray} />
                                : placeholder == 'Nome'
                                    ? <FontAwesome style={{ marginRight: widthPercentageToDP('1.5') }} name="user" size={RFValue(19.5)} color={theme.colors.gray} />
                                    : placeholder == 'Rua'
                                        ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="ios-location-sharp" size={RFValue(20)} color={theme.colors.gray} />
                                        : placeholder == 'Preço / Diária'
                                            ? <MaterialCommunityIcons style={{ marginRight: widthPercentageToDP('1.5') }} name="cash-usd-outline" size={RFValue(23)} color={theme.colors.gray} />
                                            : placeholder == 'Cidade'
                                                ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="ios-location-sharp" size={RFValue(20)} color={theme.colors.gray} />
                                                : placeholder == 'Número'
                                                    ? <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="ios-location-sharp" size={RFValue(20)} color={theme.colors.gray} />
                                                    : placeholder == 'Área aproximada em m2'
                                                        ?  <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="expand" size={RFValue(22)} color={theme.colors.gray} />
                                                        : placeholder == 'Telefone'
                                                        && <Foundation style={{ marginRight: widthPercentageToDP('1.5') }} name="telephone" size={RFValue(23.5)} color={theme.colors.gray} />
                }
                <TextInput onChangeText={onchangetext} secureTextEntry={secure} style={{ flex: 1, marginLeft: widthPercentageToDP('4'), fontSize: RFValue(14.5), color: theme.colors.gray }} placeholder={placeholder} placeholderTextColor={theme.colors.gray} />
            </AreaInput>

        </Container>
    );
}