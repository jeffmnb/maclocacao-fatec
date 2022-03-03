import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.TouchableOpacity`
    height: ${hp('4.5')};
    width: ${wp('30')};
    justify-content: center;
    align-items: center;
    border-radius:${wp('7')};
    margin-left: ${wp('3')};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.gray};
    font-size: ${RFValue(12)}px;
`;