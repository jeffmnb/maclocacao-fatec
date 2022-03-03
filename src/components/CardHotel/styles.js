import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const Container = styled.TouchableOpacity`
    width: ${wp('85')};
    height: ${hp('28')};
    border-radius: ${wp('4')};
    margin-bottom: ${hp('3')};
`;

export const AreaDescription = styled.View`
    width: 100%;
    height: ${hp('7')};
    background-color: ${theme.colors.grayLight};
    position:absolute;
    bottom: 0;
    border-bottom-left-radius: ${wp('4')};
    border-bottom-right-radius: ${wp('4')};
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('5')};
    flex-direction: row;
`;

export const Name = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(14)}px;
    margin-left: ${wp('4.5')};
`;

export const Location = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(11)}px;
    margin-left: ${wp('4.5')};
`;

export const AreaStars = styled.View`
    justify-content: center;
    align-items: center;
    width: ${wp('32')};
    height: ${hp('7')};
    flex-direction: row;
    margin-right: ${wp('1')};
`;