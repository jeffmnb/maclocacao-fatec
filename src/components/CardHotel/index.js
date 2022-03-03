import React from 'react';
import { Image, Text, View } from 'react-native';

import {
    Container,
    AreaDescription,
    Name,
    Location,
    AreaStars
} from './styles';

import imgcard from '../../assets/imgcard.jpg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import theme from '../../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { LinearGradient } from 'expo-linear-gradient';


export const CardHotel = ({ onpress }) => {
    return (
        <Container onPress={onpress}>



            <Image style={{ width: '100%', height: '100%', borderRadius: widthPercentageToDP('4') }} resizeMode='cover' source={imgcard} />

            <AreaDescription>
                <LinearGradient end={{x: 0.5, y: 2.5}} style={{ justifyContent: 'center', alignItems: 'center', width: widthPercentageToDP('85'), borderRadius: widthPercentageToDP('4'), right: widthPercentageToDP('5'), flexDirection: 'row' }} colors={[theme.colors.grayLight, theme.colors.blueLight]}>

                <View style={{ flex: 1 }}>
                    <Name numberOfLines={1}>Hotel Ipiranga</Name>
                    <Location>Ipaussu, SP</Location>
                </View>

                <AreaStars>
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                    <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                </AreaStars>

            </LinearGradient>
        </AreaDescription>

        </Container >
    );
}