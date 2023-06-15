import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Container,
  AreaMessage,
  TxtSubTitle,
  TxtTitle,
  TitleSignup,
  Subtitle,
  TxtTermos,
  TxtPolice,
  TxtLogin,
  TitleLogin,
  AreaSmsInput,
  InputSms,
  TxtPass,
  TxtChoosePhoto,
  BtnSelectimage,
} from "./styles";

import bgsignup from "../../assets/bg-signup.jpg";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";

import { Modalize } from "react-native-modalize";

import theme from "../../../theme";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { Button } from "../../components/Button";
import { MyInput } from "../../components/MyInput";
import { Load } from "../../components/Load";

import { RFValue } from "react-native-responsive-fontsize";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { recoverPass, verificateSms, changeTelefone } from "../../hooks";

import { Ionicons } from "@expo/vector-icons";

import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../hooks/auth";
import { InputCpf } from "../../components/InputCpf";

export const SignUp = () => {
  useFocusEffect(
    useCallback(() => {
      setTelefoneSms("");
      setNomeForm("");
      setEmailForm("");
      setSenhaForm("");
      setConfSenhaForm("");
      setRgForm("");
      setCpfForm("");
      setEnderecoForm("");
      setTelefoneForm("");
      setImageUser(null);
      setImageUserBase64(null);
      thirdModal.current?.close();
      setEmailUser("");
      setPassUser("");
    }, [firstModal, secondModal])
  );

  const { signIn, signUp } = useContext(AuthContext);

  const Navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [imageUser, setImageUser] = useState(null);

  const [emailUser, setEmailUser] = useState("");
  const [passUser, setPassUser] = useState("");

  const [telefoneSms, setTelefoneSms] = useState("");

  const [cpfValid, setCpfValid] = useState(false);

  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");

  const [idTokenSms, setIdTokenSms] = useState();

  const [nomeForm, setNomeForm] = useState();
  const [emailForm, setEmailForm] = useState();
  const [senhaForm, setSenhaForm] = useState();
  const [confSenhaForm, setConfSenhaForm] = useState();
  const [rgForm, setRgForm] = useState();
  const [cpfForm, setCpfForm] = useState();
  const [enderecoForm, setEnderecoForm] = useState();
  const [telefoneForm, setTelefoneForm] = useState();
  const [imageUserBase64, setImageUserBase64] = useState();

  const firstModal = useRef(false);
  const secondModal = useRef(false);
  const thirdModal = useRef(false);
  const fourthModal = useRef(false);
  const fifthModal = useRef(false);
  const sixModal = useRef(false);

  const handleLogin = () => {
    thirdModal.current?.open();
    firstModal.current?.close();
    secondModal.current?.close();
  };

  const handleSignUp = () => {
    thirdModal.current?.close();
    secondModal.current?.close();
    firstModal.current?.open();
  };

  const handleSendSMS = async () => {
    if (telefoneSms == "" || telefoneSms == " ") {
      return Alert.alert("Favor inserir seu número");
    }

    const response = await changeTelefone(telefoneSms);
    // console.log(response);

    if (response.id) {
      fourthModal.current?.open();
      thirdModal.current?.close();
      secondModal.current?.close();
      firstModal.current?.close();
      fifthModal.current?.close();
      setIdTokenSms(response.id);
      // console.log(response.id);
    } else {
      fourthModal.current?.close();
      return Alert.alert(response.data.message);
    }
  };

  const handleConfirmCode = async () => {
    const dataUser = {
      nome: nomeForm,
      email: emailForm,
      senha: senhaForm,
      // rg: rgForm,
      cpf: cpfForm,
      endereco: enderecoForm,
      foto: imageUserBase64,
      telefone: "+55" + telefoneForm,
    };

    const response = await signUp(dataUser);

    if (response.message == "Dados inválidos.") {
      return Alert.alert(
        response.message,
        "Certifique se todos os campos foram preenchidos"
      );
    }

    if (response.newUser) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Navigation.navigate("Home");
      }, 3000);
    }
  };

  const handleForgetPass = () => {
    fifthModal.current?.open();
    thirdModal.current?.close();
  };

  const handleUserLogin = async () => {
    if (emailUser == "" || passUser == "") {
      return Alert.alert("Favor inserir dados");
    }

    const data = await signIn(emailUser, passUser);

    // console.log(data);

    if (data) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Navigation.navigate("Home");
      }, 3000);
    }
  };

  const pickImage = async () => {
    const permissionResult = await Camera.requestCameraPermissionsAsync();
    if (permissionResult.status !== "granted") {
      Alert.alert("Nós precisamos da permissão para acessar suas fotos.");
      return false;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    });

    if (pickerResult) {
      setImageUser(pickerResult.uri);
      setImageUserBase64(pickerResult.base64);
    } else {
      setImageUser("");
    }
  };

  const handleSignUpUser = async () => {
    if (!cpfValid) {
      return Alert.alert("CPF Inválido.");
    }

    if (senhaForm != confSenhaForm) {
      return Alert.alert("As senhas não batem");
    }

    if (cpfForm == "" || enderecoForm == "" || telefoneForm == "") {
      return Alert.alert("Favor preencher todos os campos");
    }

    handleConfirmCode();
  };

  const handleContinueSignUp = () => {
    if (
      nomeForm == "" ||
      emailForm == "" ||
      senhaForm == "" ||
      confSenhaForm == ""
    ) {
      return Alert.alert("Favor preencher todos os campos");
    }

    firstModal.current?.close();
    secondModal.current?.open();
  };

  const validCpf = (cpf) => {
    setCpfForm(cpf);

    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") {
      setCpfValid(false);
      console.log("cpf invalido");
      return;
    }

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10))) {
      setCpfValid(false);
      console.log("cpf invalido");
      return;
    }

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) {
      setCpfValid(false);
      console.log("cpf invalido");
      return;
    }

    setCpfValid(true);
    console.log("CPF VALIDO");
  };

  if (loading) {
    return <Load />;
  }
  return (
    <Container>
      <Image style={{ flex: 1, width: "100%" }} source={bgsignup} />

      <AreaMessage>
        <TxtTitle>Olá, seja bem vindo!</TxtTitle>
        <TxtSubTitle>
          Faça seu cadastro, e encontre seu próximo descanço 😉
        </TxtSubTitle>

        {/* <Button onpress={() => firstModal.current?.open()} title={'Acessar'} /> */}
        <TouchableOpacity onPress={() => thirdModal.current?.open()}>
          <TxtLogin>Já possuo uma conta</TxtLogin>
        </TouchableOpacity>

        <Button
          onpress={() => firstModal.current?.open()}
          title={"Quero me cadastrar 🙏"}
        />
      </AreaMessage>

      <Modalize
        ref={firstModal}
        modalHeight={heightPercentageToDP("72")}
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      >
        <TitleSignup>Crie uma nova conta</TitleSignup>

        <Subtitle>Preencha os campos e pule de etapa</Subtitle>

        <MyInput
          placeholder="Nome"
          onchangetext={(text) => setNomeForm(text)}
        />
        <MyInput
          placeholder="Email"
          onchangetext={(text) => setEmailForm(text)}
        />
        <MyInput
          placeholder="Senha"
          secure={true}
          onchangetext={(text) => setSenhaForm(text)}
        />
        <MyInput
          placeholder="Confirmar Senha"
          secure={true}
          onchangetext={(text) => setConfSenhaForm(text)}
        />

        <View style={{ marginTop: heightPercentageToDP("3") }}>
          <Button onpress={handleContinueSignUp} title={"Continuar"} />
        </View>
      </Modalize>

      <Modalize
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={secondModal}
        modalHeight={heightPercentageToDP("93")}
        overlayStyle={{ backgroundColor: "transparent" }}
        childrenStyle={{ paddingBottom: heightPercentageToDP("4") }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      >
        <TitleSignup>Crie uma nova conta</TitleSignup>

        <Subtitle>Preencha os campos e pule de etapa</Subtitle>

        {/* <MyInput placeholder='RG' onchangetext={(text) => setRgForm(text)} /> */}
        <InputCpf
          cpfVal={cpfValid}
          placeholder="CPF"
          onchangetext={(text) => validCpf(text)}
        />
        {/* <MyInput cpfVal={cpfValid} placeholder='CPF' onchangetext={(text) => validCpf(text)} /> */}
        <MyInput
          placeholder="Endereço"
          onchangetext={(text) => setEnderecoForm(text)}
        />
        {/* <MyInput placeholder='Número' /> */}
        <MyInput
          placeholder="Telefone"
          onchangetext={(text) => setTelefoneForm(text)}
        />

        {imageUser ? (
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{ uri: imageUser }}
              style={{
                width: RFValue("100"),
                height: RFValue("100"),
                marginBottom: heightPercentageToDP("5.5"),
                borderRadius: widthPercentageToDP("20"),
                marginTop: heightPercentageToDP("4"),
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        ) : (
          <>
            <TxtChoosePhoto>
              Adicione uma foto de perfil (opcional).
            </TxtChoosePhoto>

            <BtnSelectimage onPress={pickImage}>
              <Ionicons
                name="add"
                size={RFValue(30)}
                color={theme.colors.gray}
              />
            </BtnSelectimage>
          </>
        )}

        <View style={{ marginTop: heightPercentageToDP("2") }}>
          <Button onpress={handleSignUpUser} title="Cadastrar" />
        </View>

        <View style={{ marginTop: heightPercentageToDP("0") }}>
          <TxtTermos>
            Já possui uma conta?{" "}
            <TouchableOpacity
              onPress={handleLogin}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.PoppinsBold,
                  color: theme.colors.gray,
                  top: heightPercentageToDP("0.3"),
                }}
              >
                Entre
              </Text>
            </TouchableOpacity>
          </TxtTermos>
        </View>

        <TouchableOpacity>
          <TxtPolice>Políticas de privacidade</TxtPolice>
        </TouchableOpacity>
      </Modalize>

      <Modalize
        ref={thirdModal}
        modalHeight={heightPercentageToDP("72")}
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      >
        <TitleLogin>Que bom que voltou 😃</TitleLogin>

        <Subtitle>Estamos felizes com sua presença</Subtitle>

        <MyInput
          placeholder="Email"
          onchangetext={(text) => setEmailUser(text)}
        />
        <MyInput
          placeholder="Senha"
          secure={true}
          onchangetext={(text) => setPassUser(text)}
        />

        <View style={{ marginTop: heightPercentageToDP("3") }}>
          <Button onpress={handleUserLogin} title={"Continuar"} />
        </View>

        <View style={{ marginTop: heightPercentageToDP("7") }}>
          <TouchableOpacity onPress={handleForgetPass}>
            <TxtPass>Esqueci minha senha</TxtPass>
          </TouchableOpacity>
          <TxtTermos>
            Não possui uma conta?{" "}
            <TouchableOpacity
              onPress={handleSignUp}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.PoppinsBold,
                  color: theme.colors.gray,
                  top: heightPercentageToDP("0.3"),
                }}
              >
                Cadastrar
              </Text>
            </TouchableOpacity>
          </TxtTermos>
        </View>
      </Modalize>

      <Modalize
        ref={fourthModal}
        modalHeight={heightPercentageToDP("46")}
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      >
        <TitleLogin>Preencha o código</TitleLogin>

        <Subtitle>Enviamos um código em seu celular</Subtitle>

        <AreaSmsInput>
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode1(text)}
          />
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode2(text)}
          />
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode3(text)}
          />
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode4(text)}
          />
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode5(text)}
          />
          <InputSms
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => setCode6(text)}
          />
        </AreaSmsInput>

        <View style={{ marginTop: heightPercentageToDP("7.5") }}>
          <Button onpress={handleConfirmCode} title={"Verificar"} />
        </View>
      </Modalize>

      <Modalize
        ref={fifthModal}
        modalHeight={heightPercentageToDP("50")}
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      >
        <TitleLogin>Fique tranquilo 💙</TitleLogin>

        <Subtitle>Informe seu telefone cadastrado</Subtitle>

        <MyInput
          onchangetext={(text) => setTelefoneSms(text)}
          placeholder="Telefone (Ex. 14999...)"
        />

        <View style={{ marginTop: heightPercentageToDP("3") }}>
          <Button onpress={handleSendSMS} title={"Continuar"} />
        </View>
      </Modalize>

      <Modalize
        ref={sixModal}
        modalHeight={heightPercentageToDP("72")}
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={{
          borderTopLeftRadius: RFValue(25),
          borderTopRightRadius: RFValue(25),
          backgroundColor: theme.colors.white,
          paddingHorizontal: 25,
          paddingTop: "10%",
        }}
      ></Modalize>
    </Container>
  );
};
