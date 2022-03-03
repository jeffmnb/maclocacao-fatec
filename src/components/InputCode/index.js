import React from 'react';

import {
    Container
} from './styles';

export const InputCode = ({ onchangetext, autofocus }) => {
    return (
        <Container autoFocus={autofocus} onChangeText={onchangetext} maxLength={1} keyboardType='numeric'>

        </Container>
    );
}