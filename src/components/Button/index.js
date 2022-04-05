import React from 'react';

import {
    Container,
    Title
} from './styles';

export const Button = ({ title, onpress }) => {
    return (
        <Container onPress={onpress}>
            <Title>{title}</Title>
        </Container>
    );
}