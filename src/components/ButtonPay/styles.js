import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.TouchableOpacity`
    width: ${wp('85')};
    height: ${hp('6.5')};
    border-width: 1.5px ;
    border-color: ${theme.colors.grayLight};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('9')};
    margin-bottom: ${hp('2.5')};
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.dark};
`;