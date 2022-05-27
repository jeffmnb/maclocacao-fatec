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

export const InputCpf = ({ placeholder, secure, onchangetext, cpfVal }) => {
    return (
        <Container style={{ borderColor: cpfVal ? theme.colors.gray : 'red' }}>

            <AreaInput>
                <Ionicons style={{ marginRight: widthPercentageToDP('1.5') }} name="wallet" size={RFValue(19.5)} color={theme.colors.gray} />

                <TextInput onChangeText={onchangetext} secureTextEntry={secure} style={{ flex: 1, marginLeft: widthPercentageToDP('4'), fontSize: RFValue(14.5), color: theme.colors.gray }} placeholder={placeholder} placeholderTextColor={theme.colors.gray} />
            </AreaInput>

        </Container>
    );
}