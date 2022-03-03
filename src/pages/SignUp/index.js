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
    TxtPass
} from './styles';

import bgsignup from '../../assets/bg-signup.jpg';
import { Image, Text, View, TouchableOpacity, Pressable, TextInput, Alert } from 'react-native';

import { Modalize } from 'react-native-modalize';

import theme from '../../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import { Button } from '../../components/Button';
import { MyInput } from '../../components/MyInput';
import { Load } from '../../components/Load';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

export const SignUp = () => {

    const Navigation = useNavigation();

    const [loading, setLoading] = useState(false);

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

    const handleSendSMS = () => {
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



            <Modalize ref={secondModal} modalHeight={heightPercentageToDP('93')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleSignup>Crie uma nova conta</TitleSignup>

                <Subtitle>Preencha os campos e pule de etapa</Subtitle>

                <MyInput placeholder='RG' />
                <MyInput placeholder='CPF' />
                <MyInput placeholder='Endereço' />
                {/* <MyInput placeholder='Número' /> */}
                <MyInput placeholder='Telefone' />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={handleSendSMS} title='Cadastrar' />
                </View>

                <View style={{ marginTop: heightPercentageToDP('2') }}>
                    <TxtTermos>Já possui uma conta? <TouchableOpacity onPress={handleLogin} style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontFamily: theme.fonts.PoppinsBold, color: theme.colors.gray, top: heightPercentageToDP('0.3') }}>Entre</Text></TouchableOpacity></TxtTermos>
                </View>


                <TouchableOpacity>
                    <TxtPolice>Políticas de privacidade</TxtPolice>
                </TouchableOpacity>
            </Modalize>



            <Modalize ref={thirdModal} modalHeight={heightPercentageToDP('72')} overlayStyle={{ backgroundColor: 'transparent' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Que bom que voltou 😃</TitleLogin>

                <Subtitle>Estamos felizes com sua presença</Subtitle>

                <MyInput placeholder='Email' />
                <MyInput placeholder='Senha' secure={true} />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={() => Navigation.navigate('Home')} title={'Continuar'} />
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

                <Subtitle>Informe seu email cadastrado</Subtitle>

                <MyInput placeholder='Email' />

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