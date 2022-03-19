import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
    width: 100%;
    background-color: ${theme.colors.white};
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('12.5')};
    margin-top: ${hp('7')};
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