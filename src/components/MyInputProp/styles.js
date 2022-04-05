import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
    width: ${wp('80')};
    height: ${hp('5.5')};    
    padding-top:${hp('1')};
    border-bottom-width:1px;
    border-bottom-color: ${theme.colors.gray};
    align-self: center;
    margin-bottom: ${hp('4')};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.interBold};
    font-size: ${RFValue(12.5)}px;
    color: ${theme.colors.gray};
    margin-bottom: ${hp('2')};
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;