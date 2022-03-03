import React from 'react';
import theme from '../../../theme';

import {
    Container,
    Title
} from './styles';

export const CardCategory = ({ title, actived, onpress }) => {
    return (
        <Container onPress={onpress} style={{ backgroundColor: actived ? theme.colors.blue : theme.colors.grayLight }}>
            <Title style={{ color: actived ? theme.colors.white : theme.colors.gray }}>{title}</Title>
        </Container>
    );
}