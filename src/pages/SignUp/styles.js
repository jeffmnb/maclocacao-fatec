import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.white};
    justify-content: center;
    align-items: center;
`;

export const AreaMessage = styled.View`
    width: 100%;
    background-color: ${theme.colors.white};
    border-top-left-radius: ${RFValue(25)}px;
    border-top-right-radius: ${RFValue(25)}px;
    bottom: ${hp('3')};
    justify-content: center;
    align-items: center;
    padding-top: ${hp('4')};
    padding-bottom: ${hp('4')};
`;

export const TxtTitle = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin-bottom: ${hp('7')};
`;

export const TxtSubTitle = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.gray};
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-bottom: ${hp('7')};
`;

export const TitleSignup = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(18)}px;
    text-align: center;
    margin-bottom: ${hp('1.2')};
`;

export const Subtitle = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(13)}px;
    margin-bottom: ${hp('7')};
    text-align: center;
`;

export const TxtTermos = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(13)}px;
    margin-bottom: ${hp('7')};
    text-align: center;
`;

export const TxtPolice = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.blue};
    font-size: ${RFValue(11)}px;
    text-align: center;
`;

export const TxtLogin = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.blue};
    font-size: ${RFValue(15)}px;
    text-align: center;
`;

export const TitleLogin = styled.Text`
     font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(21)}px;
    text-align: center;
    margin-bottom: ${hp('1')};
`;

export const AreaSmsInput = styled.View`
    flex-direction: row;
    align-self: center;
    margin-left: ${wp('2')};
`;

export const InputSms = styled.TextInput`
width: ${wp('10.5')};
height: ${hp('7')};
border-color: ${theme.colors.gray};
border-width: 1px;
border-radius: ${wp('5')}px;
margin-right: ${wp('3')};
text-align: center;
font-family: ${theme.fonts.PoppinsBold};
color: ${theme.colors.gray};
font-size: ${RFValue(18)}px;
`;

export const TxtPass = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.blue};
    font-size: ${RFValue(12)}px;
    margin-bottom: ${hp('1')};
    text-align: center;
`;

export const TxtChoosePhoto = styled.Text`
    color: ${theme.colors.gray};
    font-size: ${RFValue(12.5)}px;
    font-family: ${theme.fonts.PoppinsRegular};
    margin-top: ${hp('1')};
    text-align: center;
`;

export const BtnSelectimage = styled.TouchableOpacity`
    width: ${RFValue('80')};
    height: ${RFValue('80')};
    border-radius: ${wp('20')};
    background-color: ${theme.colors.grayLight};
    justify-content: center;
    align-items: center;
    margin-bottom:${hp('2')};
    margin-top: ${hp('2')};
    align-self:center;
`;