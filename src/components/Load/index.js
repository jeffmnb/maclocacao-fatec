import React from 'react';

import {
    Container
} from './styles';

import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/Loading.json';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const Load = () => {
    return (
        <Container>
            <LottieView speed={2} source={loadAnimation} autoPlay loop style={{
                width: widthPercentageToDP('30'),
                height: heightPercentageToDP('20'),
            }} />
        </Container>
    );
}