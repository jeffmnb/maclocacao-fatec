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

export const UserConfig = () => {
  return (
    <Container>
      <TxtTitle>CONFIGURACOES</TxtTitle>

      <AreaButtons>

        <BtnConta>
          <TxtConta>Minha Conta</TxtConta>
        </BtnConta>

        <BtnMyImo>
          <TxtMyImo>Meus Imóveis</TxtMyImo>
        </BtnMyImo>

        <BtnExit>
          <TxtExit>Sair</TxtExit>
        </BtnExit>

      </AreaButtons>
    </Container>
  );
}