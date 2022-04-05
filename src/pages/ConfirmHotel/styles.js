import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const Container = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.white};
`;

export const Header = styled.View`
    width: ${wp('100')};
    height: ${hp('7')};
    margin-top: ${hp('5')};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: ${wp('2')};
    padding-right: ${wp('6')};
`;

export const BtnBack = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: ${theme.colors.blue};
    margin-left: ${wp('4')};
    border-radius: ${wp('7')};
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${wp('2')};
`;

export const TxtTitle = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
    position: absolute;
    margin-left: ${wp('40')};
`;

export const AreaAbout = styled.View`
    width: ${wp('100')};
    height: ${hp('28')};
    margin-top: ${hp('5')};
    padding-left: ${wp('6')};
    padding-right: ${wp('6')};
`;

export const TitleAbout = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.dark};
    padding-left: ${wp('1')};
`;

export const AreaDays = styled.View`
    width: ${wp('25')};
    height: ${hp('22')};
    background-color: ${theme.colors.blueLight};
    border-radius: ${wp('50')};
    justify-content: space-evenly;
    align-items: center;  
`;

export const ValueDate = styled.TouchableOpacity`
    width: ${RFValue(62)}px;
    height: ${RFValue(62)}px;
    background-color: ${theme.colors.white};
    border-radius:${RFValue(50)}px;
    justify-content: center;
    align-items: center;
`;

export const AreaHours = styled.View`
    flex: 1;
    height: ${hp('20')};
    align-items: flex-start;
    padding-left: ${wp('6')};
    justify-content: space-around;
`;

export const Label = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.gray};
    padding-left: ${wp('1.5')};
    margin-bottom: ${hp('1')};
`;

export const Hour = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
    padding-left: ${wp('1.5')};
    margin-bottom: ${hp('1')};
`;

export const AreaDetails = styled.View`
    width: ${wp('100')};
    margin-top: ${hp('3')};
    margin-bottom: ${hp('7')};
`;

export const TxtDetails = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.dark};
    padding-left: ${wp('7')};
    margin-bottom: ${hp('2')};
`;

export const TxtDate = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.dark};
`;

export const TitleDetail = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.dark};
`;

export const TxtPrice = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.dark};
`;

export const TxtSpace = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.gray};
`;