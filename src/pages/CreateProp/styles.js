import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`
    margin-top: ${hp('8')};
    margin-bottom: ${hp('7')};
    font-family: ${theme.fonts.PoppinsBold};
    color: ${theme.colors.dark};
    font-size: ${RFValue(20)}px;
    text-align: center;
`;

export const AreaInput = styled.View`
    margin-top: ${RFValue(50)}px;
`;

export const SubTitle = styled.Text`
    margin-bottom: ${hp('7')};
    font-family: ${theme.fonts.interMedium};
    color: ${theme.colors.gray};
    font-size: ${RFValue(14)}px;
    text-align: center;
`;


export const TitleModal = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.dark};
    text-align: center;
    margin-bottom: ${hp('7')};
`;

export const TxtPhoto = styled.Text`
    font-family: ${theme.fonts.PoppinsBold};
    font-size: ${RFValue(21)}px;
    color: ${theme.colors.dark};
    text-align: center;
    margin-bottom: ${hp('7')};
`;

export const TxtDescription = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray};
    text-align: center;
    margin-top: ${hp('2.5')};
`;

export const InputDescription = styled.TextInput`
    width: ${wp('80')};
    height: ${hp('15')};
    border-width: 1px;
    border-radius: ${RFValue(15)}px;
    border-color: ${theme.colors.gray};
    align-self: center;
    margin-top: ${hp('2')};
    padding-left: ${wp('3')};
    padding-right: ${wp('3')};
    padding-top: ${hp('1.5')};
    color: ${theme.colors.gray};
`;

export const TxtChoose = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray};
    text-align: center;
    margin-bottom: ${hp('1.5')};
`;

export const TxtCategories = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray};
    text-align: center;
    margin-bottom: ${hp('1.5')};
    margin-top: ${hp('5')};
`;

export const TxtInfo = styled.Text`
    font-family: ${theme.fonts.PoppinsRegular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.gray};
    text-align: center;
    margin-left: ${wp('2.5')};
`;

export const ButtonImage = styled.TouchableOpacity`
    width: ${RFValue(90)}px;
    height: ${RFValue(90)}px;
    border-radius: ${RFValue(45)}px;
    background-color: ${theme.colors.grayLight};
    justify-content: center;
    align-items: center ;
`;

export const AreaButtons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: ${hp('3')};
    margin-bottom: ${hp('3')};
`;

export const ImageProp = styled.Image`
    width: ${RFValue(90)}px;
    height: ${RFValue(90)}px;
    border-radius: ${RFValue(45)}px;
`;