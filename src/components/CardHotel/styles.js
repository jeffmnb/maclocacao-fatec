import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const Container = styled.TouchableOpacity`
    width: ${wp('85')};
    height: ${hp('28')};
    border-radius: ${wp('4')};
    margin-bottom: ${hp('3')};
    margin-right: ${wp('5')};
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

export const AreaTime = styled.View`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: ${RFValue(40)};
    background-color: ${theme.colors.blueLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${hp('5.2')};
    left: ${wp('10')};
`;

export const AreaTimeFinal = styled.View`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: ${RFValue(40)};
    background-color: ${theme.colors.blueLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${hp('5.2')};
    left: ${wp('50')};
`;

export const TitleMonth = styled.Text`
    font-family: ${theme.fonts.interBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.dark};
    margin-bottom: ${hp('1')};
`;

export const TitleDay = styled.Text`
    font-family: ${theme.fonts.interBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.dark};
`;