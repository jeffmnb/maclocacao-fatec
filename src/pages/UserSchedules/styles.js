import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.white};
`;

export const Header = styled.View`
    width: ${wp('100')};
    margin-top: ${Platform.OS == 'ios' ? hp('8') : RFValue('7')};
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

export const TxtLength = styled.Text`
    margin-top: ${hp('8')};
    align-self: flex-end;
    padding-right: ${wp('9')};
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
`;

export const TxtWelcome = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    opacity: 0.9;
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(35)}px;
`;

export const TxtNotData = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.gray};
    opacity: 0.5;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(30)}px;
    position: absolute;
    top: ${hp('45')};
`;

export const AreaBtn = styled.View`
    position: absolute;
    top: 125;
    right: 390;
`;

export const AreaTime = styled.View`
    width: ${wp('80')};
    position: absolute;
    border-radius: ${wp('5')};
    background-color:red;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
`;