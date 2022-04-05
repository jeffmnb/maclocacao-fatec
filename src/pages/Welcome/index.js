import React from 'react';

import {
    Container,
    ImageBg,
    Title,
    ButtonNext
} from './styles';

import imageWelcome from '../../assets/image-Welcome.jpg';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Welcome = () => {

    const Navigation = useNavigation();

    return (
        <Container>
            <ImageBg source={imageWelcome} resizeMode='center' />

            <Title>Bora arrumar um hotel?</Title>

            <ButtonNext onPress={()=> Navigation.navigate('SignUp')}>
                <MaterialIcons name="keyboard-arrow-right" size={RFValue(42)} color="black" />
            </ButtonNext>
        </Container>
    )
}