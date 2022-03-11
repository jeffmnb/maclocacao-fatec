import React, { useEffect, useRef, useState } from 'react';

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
    BtnSelectimage
} from './styles';

import bgsignup from '../../assets/bg-signup.jpg';
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';

import { Modalize } from 'react-native-modalize';

import theme from '../../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { Button } from '../../components/Button';
import { MyInput } from '../../components/MyInput';
import { Load } from '../../components/Load';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { loginUser, recoverPass } from '../../hooks';

import { Ionicons } from '@expo/vector-icons';

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export const SignUp = () => {

    const Navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const [imageUser, setImageUser] = useState(null);

    const [emailUser, setEmailUser] = useState('');
    const [passUser, setPassUser] = useState('');

    const [telefoneSms, setTelefoneSms] = useState('');

    const firstModal = useRef(false);
    const secondModal = useRef(false);
    const thirdModal = useRef(false);
    const fourthModal = useRef(false);
    const fifthModal = useRef(false);

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
        fourthModal.current?.open();
        thirdModal.current?.close();
        secondModal.current?.close();
        firstModal.current?.close();
        fifthModal.current?.close();

    };

    const handleConfirmCode = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Navigation.navigate('Home')
        }, 3000);
    };

    const handleForgetPass = () => {
        fifthModal.current?.open();
        thirdModal.current?.close();
    };


    const handleUserLogin = async () => {
        const data = await loginUser(emailUser, passUser);

        if (data) {
            Navigation.navigate('Home');
        }
    };


    const handleRecoverPass = () => {

    };

    const pickImage = async () => {

        const permissionResult = await Camera.requestCameraPermissionsAsync();
        if (permissionResult.status !== 'granted') {
            Alert.alert('Nós precisamos da permissão para acessar suas fotos.');
            return false
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true,
        })

        if (pickerResult) {
            setImageUser(pickerResult.uri);
        } else {
            setImageUser('');
        }
    };

    if (loading) {
        return <Load />
    }
    return (
        <Container>

            <Image source={bgsignup} />

            <AreaMessage>
                <TxtTitle>Olá, seja bem vindo!</TxtTitle>
                <TxtSubTitle>Faça seu cadastro, e encontre seu próximo descanço 😉</TxtSubTitle>

                <Button onpress={() => firstModal.current?.open()} title={'Quero me cadastrar 🙏'} />
                {/* <Button onpress={() => firstModal.current?.open()} title={'Acessar'} /> */}
                <TouchableOpacity onPress={() => thirdModal.current?.open()}><TxtLogin>Já possuo uma conta</TxtLogin></TouchableOpacity>
            </AreaMessage>

            <Modalize ref={firstModal} modalHeight={heightPercentageToDP('72')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleSignup>Crie uma nova conta</TitleSignup>

                <Subtitle>Preencha os campos e pule de etapa</Subtitle>

                <MyInput placeholder='Nome' />
                <MyInput placeholder='Email' />
                <MyInput placeholder='Senha' secure={true} />
                <MyInput placeholder='Confirmar Senha' secure={true} />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={() => secondModal.current?.open()} title={'Continuar'} />
                </View>
            </Modalize>



            <Modalize scrollViewProps={{ showsVerticalScrollIndicator: false }} ref={secondModal} modalHeight={heightPercentageToDP('93')} overlayStyle={{ backgroundColor: 'transparent' }} childrenStyle={{ paddingBottom: heightPercentageToDP('4') }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleSignup>Crie uma nova conta</TitleSignup>

                <Subtitle>Preencha os campos e pule de etapa</Subtitle>

                <MyInput placeholder='RG' />
                <MyInput placeholder='CPF' />
                <MyInput placeholder='Endereço' />
                {/* <MyInput placeholder='Número' /> */}
                <MyInput placeholder='Telefone' />

                {
                    imageUser

                        ?

                        <TouchableOpacity onPress={pickImage}>
                            <Image source={{ uri: imageUser }} style={{ width: RFValue('100'), height: RFValue('100'), marginBottom: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('20'), marginTop: heightPercentageToDP('4'), alignSelf: 'center' }} />
                        </TouchableOpacity>

                        :

                        <>
                            <TxtChoosePhoto>Adicione uma foto de perfil (opcional).</TxtChoosePhoto>

                            <BtnSelectimage onPress={pickImage}>
                                <Ionicons name="add" size={RFValue(30)} color={theme.colors.gray} />
                            </BtnSelectimage>
                        </>

                }

                <View style={{ marginTop: heightPercentageToDP('2') }}>
                    <Button onpress={handleSendSMS} title='Cadastrar' />
                </View>

                <View style={{ marginTop: heightPercentageToDP('0') }}>
                    <TxtTermos>Já possui uma conta? <TouchableOpacity onPress={handleLogin} style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontFamily: theme.fonts.PoppinsBold, color: theme.colors.gray, top: heightPercentageToDP('0.3') }}>Entre</Text></TouchableOpacity></TxtTermos>
                </View>


                <TouchableOpacity>
                    <TxtPolice>Políticas de privacidade</TxtPolice>
                </TouchableOpacity>
            </Modalize>



            <Modalize ref={thirdModal} modalHeight={heightPercentageToDP('72')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Que bom que voltou 😃</TitleLogin>

                <Subtitle>Estamos felizes com sua presença</Subtitle>

                <MyInput placeholder='Email' onchangetext={(text) => setEmailUser(text)} />
                <MyInput placeholder='Senha' secure={true} onchangetext={(text) => setPassUser(text)} />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={handleUserLogin} title={'Continuar'} />
                </View>

                <View style={{ marginTop: heightPercentageToDP('7') }}>
                    <TouchableOpacity onPress={handleForgetPass}><TxtPass>Esqueci minha senha</TxtPass></TouchableOpacity>
                    <TxtTermos>Não possui uma conta? <TouchableOpacity onPress={handleSignUp} style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontFamily: theme.fonts.PoppinsBold, color: theme.colors.gray, top: heightPercentageToDP('0.3') }}>Cadastrar</Text></TouchableOpacity></TxtTermos>
                </View>
            </Modalize>


            <Modalize ref={fourthModal} modalHeight={heightPercentageToDP('46')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Preencha o código</TitleLogin>

                <Subtitle>Enviamos um código em seu celular</Subtitle>

                <AreaSmsInput>
                    <InputSms maxLength={1} keyboardType='numeric' />
                    <InputSms maxLength={1} keyboardType='numeric' />
                    <InputSms maxLength={1} keyboardType='numeric' />
                    <InputSms maxLength={1} keyboardType='numeric' />
                    <InputSms maxLength={1} keyboardType='numeric' />
                </AreaSmsInput>

                <View style={{ marginTop: heightPercentageToDP('7.5') }}>
                    <Button onpress={handleConfirmCode} title={'Verificar'} />
                </View>

            </Modalize>



            <Modalize ref={fifthModal} modalHeight={heightPercentageToDP('50')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Fique tranquilo 💙</TitleLogin>

                <Subtitle>Informe seu telefone cadastrado</Subtitle>

                <MyInput onchangetext={(text) => setTelefoneSms(text)} placeholder='Telefone' />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={handleSendSMS} title={'Continuar'} />
                </View>

                <View style={{ marginTop: heightPercentageToDP('7') }}>
                    <TouchableOpacity><TxtPass>Esqueci minha senha</TxtPass></TouchableOpacity>
                    <TxtTermos>Não possui uma conta? <TouchableOpacity onPress={handleSignUp} style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontFamily: theme.fonts.PoppinsBold, color: theme.colors.gray, top: heightPercentageToDP('0.3') }}>Cadastrar</Text></TouchableOpacity></TxtTermos>
                </View>
            </Modalize>
        </Container >
    );
}