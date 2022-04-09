import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.white};
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('12.5')};
    margin-top: ${hp('3')};
    padding-top: ${hp('2')};
    padding-left: ${wp('6')};
    padding-right: ${wp('6')};
    flex-direction: row;
    justify-content: space-between;
`;

export const BtnFilter = styled.TouchableOpacity`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    background-color: ${theme.colors.blue};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('10')};
`;

export const Areainput = styled.View`
    flex-direction: row;
    width: ${wp('70')};
    height: ${RFValue(45)}px;
    background-color: ${theme.colors.grayLight};
    border-radius: ${wp('10')};
    align-items: center;
`;

export const AreaIcon = styled.TouchableOpacity`
    width: ${wp('10')};
    height: ${hp('5')};
    margin-left: ${wp('3')};
    justify-content: center;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    width: ${wp('55')};
    height: ${hp('6')};
`;


export const txtNotData = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.gray};
    opacity: 0.7;
`;

export const AreaName = styled.View`
    width: 100%;
    padding-left: ${wp('6.5')};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${Platform.OS == 'ios' ? hp('6') : hp('2')};
`;

export const TxtName = styled.Text`
    font-family: ${theme.fonts.Jost_600SemiBold};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.blue};
`;

export const TxtGreetings = styled.Text`
    font-family: ${theme.fonts.Jost_300Light};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.dark};
`;

export const TxtWelcome = styled.Text`
    padding-left: ${wp('6.5')};
    font-family: ${theme.fonts.Jost_300Light};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
    margin-left: ${wp('1')};
`;

export const ImageUser = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
    left: ${wp('80')};
    top: ${hp('1.7')};
    position: absolute;

`;

export const TxtSugestion = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.dark};
    padding-left: ${wp('6')};
    margin-top: ${hp('6')};
`;

export const Txtcategory = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.dark};
    padding-left: ${wp('6')};
    margin-top: ${hp('1.5')};
    margin-bottom: ${hp('2')};
`;


export const ButtonAdd = styled.TouchableOpacity`
    width:${RFValue(50)}px;
    height: ${RFValue(50)}px;
    background-color: ${theme.colors.blue};
    border-radius: ${RFValue(25)}px;
    position: absolute;
    top: ${hp('83')};
    right: ${wp('5')};
    justify-content: center;
    align-items: center;
`;

export const AreaDates = styled.View`
    align-self:center ;
    margin-bottom: ${hp('3')};
    width: ${RFValue(250)}px;
    height: ${RFValue(75)}px;
    border-radius: ${RFValue(75)}px;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding-left: ${wp('2')};
    padding-right: ${wp('2')};
`;

export const BtnDate = styled.TouchableOpacity`
    width: ${RFValue(65)}px;
    height:${RFValue(65)}px;
    border-radius:${RFValue(35)};
    background-color: ${theme.colors.grayLight};
    justify-content: center;
    align-items: center;
`;

export const TxtDateIni = styled.Text`
    font-family: ${theme.fonts.interBold};
    font-size: ${RFValue(13.5)}px;
    color: ${theme.colors.dark};
    left: ${wp('14.5')};
    margin-bottom: ${hp('1')};
`;

export const TxtDateFin = styled.Text`
    font-family: ${theme.fonts.interBold};
    font-size: ${RFValue(13.5)}px;
    color: ${theme.colors.dark};
    left: ${wp('50.5')};
    margin-bottom: ${hp('3')};
`;

export const TxtDateSelected = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.dark};
    margin-top: ${hp('0.5')};
`;
