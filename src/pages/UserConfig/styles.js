import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
flex: 1;
    align-items: center;
    background-color: ${theme.colors.white};
`;

export const TxtTitle = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.dark};
    position: absolute;
    margin-top: ${hp('7')};
    position: relative;
`;

export const AreaButtons = styled.View`
    width: 100%;
    height: ${hp('15')};
    margin-top: ${hp('7')};
`;

export const BtnExit = styled.TouchableOpacity`
    width: 100%;
    height: ${hp('5')};
    justify-content: flex-start;
    align-items: center;
    padding-left: ${wp('6')};
    flex-direction: row;
`;

export const TxtExit = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.tomato};
    font-size: ${RFValue(14)}px;
    margin-top: ${hp('1')};
`;

export const BtnConta = styled.TouchableOpacity`
    width: 100%;
    height: ${hp('5.5')};
    border-top-width: 1;
    border-color: ${theme.colors.gray};
    justify-content: flex-start;
    align-items: center;
    padding-left: ${wp('6')};
    flex-direction: row;
`;

export const TxtConta = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(14)}px;
`;

export const BtnMyImo = styled.TouchableOpacity`
    width: 100%;
    height: ${hp('5.5')};
    border-top-width: 1;
    border-bottom-width: 1;
    border-color: ${theme.colors.gray};
    justify-content: flex-start;
    align-items: center;
    padding-left: ${wp('6')};
    flex-direction: row;
`;

export const TxtMyImo = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(14)}px;
`;