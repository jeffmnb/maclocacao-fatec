import React from 'react';

import {
    Container,
    Title
} from './styles';

import LogoCard from '../../assets/logoCard.svg';
import LogoPix from '../../assets/logoPix.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonPay = ({ title, onpress, type }) => {
    return (
        <Container onPress={onpress}>
            {type == 'card' ? <LogoCard width={RFValue(45)} style={{ marginRight: RFValue(10) }} />
                : <LogoPix width={RFValue(50)} style={{ marginRight: RFValue(10) }} />}
            <Title>{title}</Title>
        </Container>
    );
}