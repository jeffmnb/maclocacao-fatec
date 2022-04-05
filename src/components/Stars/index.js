import React from 'react';

import {
    Container
} from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { View } from 'react-native';

export const Stars = ({ value }) => {
    return (
        <Container>
            {
                value == 1
                && <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                </View>
            }

            {
                value == 2
                && <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                </View>
            }

            {
                value == 3
                && <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                </View>
            }

            {
                value == 4
                && <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star-o" size={RFValue(18)} color={theme.colors.blue} />
                </View>
            }

            {
                value == 5
                && <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                </View>
            }
        </Container>
    );
}