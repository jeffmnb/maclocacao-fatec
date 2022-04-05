import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const Container = styled.TextInput`
width: ${wp('10.5')};
height: ${hp('7')};
border-color: ${theme.colors.gray};
border-width: 1px;
border-radius: ${wp('5')}px;
margin-left: ${wp('5')};
text-align: center;
font-family: ${theme.fonts.PoppinsBold};
color: ${theme.colors.gray};
font-size: ${RFValue(18)}px;
`;