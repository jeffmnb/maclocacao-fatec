import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.TouchableOpacity`
    width: ${wp('85')};
    height: ${hp('6.5')};
    background-color: ${theme.colors.blue};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('9')};
    margin-bottom: ${hp('4')};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.white};
`;