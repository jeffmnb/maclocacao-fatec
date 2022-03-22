import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.white};
    padding-left: ${wp('6')};
    padding-right: ${wp('6')};
`;

export const TxtTitle = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
    text-align: center;
    margin-top: ${hp('7')};
`;

export const ImgUser = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    border-radius: ${RFValue(50)}px;
`;

export const TxtChangeImg = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(13)}px;
    text-align: center;
    margin-top: ${hp('1')};
`;

export const AreaEditImg = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TxtContact = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.dark};
`;

export const TxtTel = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.dark};
    margin-top: ${hp('1')};
`;

export const BtnEdit = styled.TouchableOpacity`
    background-color: ${theme.colors.blueWhite};
    width: ${RFValue(35)}px; 
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
`;

export const BtnBack = styled.TouchableOpacity`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    background-color: ${theme.colors.blue};
    border-radius: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
`;


export const TitleLogin = styled.Text`
     font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(21)}px;
    text-align: center;
    margin-bottom: ${hp('1')};
`;

export const Subtitle = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(13)}px;
    margin-bottom: ${hp('7')};
    text-align: center;
`;
