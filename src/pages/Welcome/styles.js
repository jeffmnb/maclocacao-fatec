import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #0f0f0f;
`;

export const ImageBg = styled.Image`
    width: 100%;
    height: ${hp('68')}
`;

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: ${RFValue(40)}px;
    font-family: ${theme.fonts.PattayaRegular};
    text-align: center;
    position: absolute;
    top: ${hp('63')};
`;

export const ButtonNext = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    background-color: ${theme.colors.white};
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(35)}px;
    position: absolute;
    top: ${hp('84')};
`;