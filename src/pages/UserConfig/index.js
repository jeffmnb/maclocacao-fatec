import React from 'react';

import {
  Container,
  TxtTitle,
  AreaButtons,
  BtnExit,
  TxtExit,
  BtnConta,
  TxtConta,
  BtnMyImo,
  TxtMyImo
} from './styles';

import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export const UserConfig = () => {

  const Navigation = useNavigation();

  return (
    <Container>
      <TxtTitle>CONFIGURACOES</TxtTitle>

      <AreaButtons>

        <BtnConta onPress={()=> Navigation.navigate('UserProps')}>

          <View style={{ marginLeft: widthPercentageToDP('0.7'), marginRight:widthPercentageToDP('2.2') }}>
            <FontAwesome5 name="hotel" size={RFValue(18)} color={theme.colors.gray} />
          </View>

          <TxtConta>Meus Imóveis</TxtConta>
        </BtnConta>

        <BtnMyImo onPress={()=> Navigation.navigate('UserProfile')}>

          <View style={{ marginRight: widthPercentageToDP('1.5') }}>
            <MaterialCommunityIcons name="account-circle" size={RFValue(24)} color={theme.colors.gray} />
          </View>

          <TxtMyImo>Minha Conta</TxtMyImo>
        </BtnMyImo>

        <BtnExit>
          <View style={{ marginTop: heightPercentageToDP('1'), marginRight: widthPercentageToDP('1.5') }}>
            <MaterialIcons name="exit-to-app" size={RFValue(22.7)} color={theme.colors.tomato} />
          </View>

          <TxtExit>Sair</TxtExit>
        </BtnExit>

      </AreaButtons>
    </Container>
  );
}