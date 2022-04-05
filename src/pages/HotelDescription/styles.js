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

export const SlideImages = styled.View`
    width: ${wp('95')};
    height: ${hp('33')};
    margin-top: ${hp('5')};
    border-radius: ${wp('8')};
    flex: 1;
`;

export const Title = styled.Text`
flex: 1;
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(21)}px;
    color: ${theme.colors.dark};
    margin-top: ${hp('2')};
    align-self: flex-start;
    margin-left: ${wp('5')};
`;

export const BtnBack = styled.TouchableOpacity`
    width: ${RFValue(43)}px;
    height: ${RFValue(43)}px;
    background-color: ${theme.colors.white};
    margin-top: ${hp('1.5')};
    margin-left: ${wp('4')};
    border-radius: ${wp('7')};
    justify-content: center;
    align-items: center;
    opacity: 1;
`;

export const BtnFavorite = styled.TouchableOpacity`
    width: ${RFValue(43)}px;
    height: ${RFValue(43)}px;
    background-color: ${theme.colors.white};
    margin-top: ${hp('1.5')};
    margin-right: ${wp('4')};
    border-radius: ${wp('7')};
    justify-content: center;
    align-items: center;
`;

export const Price = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(16.5)}px;
    color: ${theme.colors.blue};
    margin-top: ${hp('2')};
    align-self: flex-start;
    margin-left: ${wp('5')};
`;

export const Location = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(13.5)}px;
    color: ${theme.colors.gray};
    margin-top: ${hp('0.5')};
    align-self: flex-start;
    margin-left: ${wp('5')};
`;

export const Details = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.dark};
    margin-top: ${hp('3')};
    align-self: flex-start;
    margin-left: ${wp('5')};
`;

export const AreaDetails = styled.View`
    width: ${wp('90')}px;
    height: ${hp('12')}px;
    border-radius: ${RFValue(15)}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: ${wp('2')};
    padding-right: ${wp('2')};
    margin-top: ${hp('1.5')};
    align-self: center;
`;

export const Area = styled.View`
    width: ${RFValue(75)}px;
    height: ${RFValue(75)}px;
    background-color: ${theme.colors.white};
    border-radius: ${RFValue(15)}px;
    justify-content: space-evenly;
    align-items: center;
`;

export const TitleDetail = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.blue};
`;

export const TitleArea = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(12.5)}px;
    color: ${theme.colors.blue};
`;

export const TxtBenefits = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.dark};
    margin-top: ${hp('5')};
    margin-bottom: ${hp('0.5')};
    align-self: flex-start;
    margin-left: ${wp('5')};
`;


export const AreaBenefits = styled.View`
    width: ${wp('90')};
    height: ${hp('13')};
    margin-top: ${hp('2')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
`;

export const TxtItem = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    color: ${theme.colors.gray};
    font-size: ${RFValue(14.5)}px;
    flex: 1;
    max-width: ${wp('40')};
`;


export const AreaStars = styled.View`
    justify-content: center;
    align-items: center;
    width: ${wp('32')};
    height: ${hp('7')};
    flex-direction: row;
    padding-top: ${hp('1.5')};
    padding-left: ${wp('2')};
`;
