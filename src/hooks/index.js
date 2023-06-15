import axios from "axios";
import { Alert } from "react-native";

const { URI_API } = process.env;

//faz login
export const loginUser = async (email, senha) => {
  const userData = {
    email,
    senha,
  };

  try {
    const response = await axios.post(`${URI_API}/user/login`, userData);
    // console.log(response.data);

    if (response.data.user) {
      return true;
    } else {
      return Alert.alert(response.data.message);
    }
  } catch (error) {
    if (error.message == "Network Error") {
      return Alert.alert("Opss, sem conexão");
    }
  }
};

//cadastra novo user
export const signUp = async (dataUser) => {
  try {
    const response = await axios.post(`${URI_API}/user/cadastro`, dataUser);

    return response.data;
  } catch (error) {
    console.log("Náo foi possivel chamar axios / cadastro user");
  }
};

//envia sms de recuperacao de senha
export const recoverPass = async (numberUser) => {
  try {
    const data = { telefone: "+55" + numberUser };

    const response = await axios.post(
      `${URI_API}/user/enviasmsvalidacao`,
      data
    );
    // console.log(response.data);

    return response;
  } catch (error) {
    Alert.alert("recoverPass Não foi possível enviar SMS.");
  }
};

//envia sms para troca de contato
export const changeTelefone = async (numberUser) => {
  try {
    const data = { telefone: "+55" + numberUser };

    const response = await axios.post(
      `${URI_API}/user/enviasmsvalidacaotroca`,
      data
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    Alert.alert("changeTelefone Não foi possível enviar SMS.");
  }
};

//verifica SMS senha
export const verificateSms = async (code, idSms) => {
  const dataSms = {
    id: idSms,
    token: code,
  };

  const response = await axios.post(`${URI_API}/user/smsvalidacao`, dataSms);

  return response.data;
};

//verifica SMS troca de telefone
export const verificateSmsTelefone = async (
  code,
  idSms,
  telefoneUser,
  idUser
) => {
  const dataSms = {
    id: idSms,
    token: code,
    telefoneUser,
    idUser,
  };

  const response = await axios.post(
    `${URI_API}/user/smsvalidacaotelefone`,
    dataSms
  );

  return response.data;
};
