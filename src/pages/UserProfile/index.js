import React, { useCallback, useContext, useRef, useState } from 'react';
import { Image, TouchableOpacity, View, Text, Alert } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import {
    Container,
    TxtTitle,
    ImgUser,
    TxtChangeImg,
    AreaEditImg,
    TxtContact,
    TxtTel,
    BtnEdit,
    BtnBack,
    TitleLogin,
    Subtitle
} from './styles';

import { MaterialIcons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';

import ImageUser from '../../assets/ImageUser.png';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { AuthContext, loadUserData, userDataStoraged } from '../../hooks/auth';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Modalize } from 'react-native-modalize';
import { MyInput } from '../../components/MyInput';
import { Button } from '../../components/Button';
import { changeTelefone, recoverPass, verificateSms, verificateSmsTelefone } from '../../hooks';
import axios from 'axios';
import { AreaSmsInput, InputSms } from '../SignUp/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserProfile = () => {

    useFocusEffect(useCallback(() => {
        setImageUser(null);
        setImageUserBase64();
    }, []));

    const Navigation = useNavigation();


    const modalTelefone = useRef(false);
    const modalVerificateSms = useRef(false);


    const { changePhotoUser } = useContext(AuthContext);

    const [imageUser, setImageUser] = useState(null);

    const [telefoneSms, setTelefoneSms] = useState('');

    const [idTokenSms, setIdTokenSms] = useState();

    const [imageUserBase64, setImageUserBase64] = useState();

    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');

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

            const response = await changePhotoUser(pickerResult.base64);

            console.log(response);

        } else {
            setImageUser('');
        }
    };


    const handleSendSMS = async () => {

        if (telefoneSms == '' || telefoneSms == ' ') {
            return Alert.alert('Favor inserir seu número');
        }

        const response = await changeTelefone(telefoneSms)

        if (response.response.id) {
            modalTelefone.current?.close();
            setIdTokenSms(response.response.id);
            modalVerificateSms.current?.open();
        } else {
            modalTelefone.current?.close();
            return Alert.alert(response.message);
        }
    };


    const handleConfirmCode = async () => {

        const smsCode = code1 + code2 + code3 + code4 + code5 + code6;

        const response = await verificateSmsTelefone(smsCode, idTokenSms, telefoneSms, userDataStoraged._id);
        console.log(response);

        if (response.message == "SMS validado com sucesso") {
            modalVerificateSms.current?.close();
            Alert.alert('Telefone validado com sucesso');
            setIdTokenSms('');

            const user = response.response;

            await AsyncStorage.setItem('userteste', JSON.stringify(user));

            await loadUserData();

            Navigation.goBack();

        } else {
            setIdTokenSms('');
            modalVerificateSms.current?.close();
            return Alert.alert('Opps, tente novamente');
        }

        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     Navigation.navigate('Home')
        // }, 3000);
    };

    return (

        <Container>
            <TxtTitle>MINHA CONTA</TxtTitle>

            <BtnBack onPress={() => Navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={RFValue(28.5)} color={theme.colors.white} />
            </BtnBack>

            {
                imageUser != null ?
                    <ImgUser style={{ alignSelf: 'center', marginTop: heightPercentageToDP('7') }} source={{ uri: imageUser }} />

                    :

                    <ImgUser style={{ alignSelf: 'center', marginTop: heightPercentageToDP('7') }} source={userDataStoraged.foto != null ? { uri: `data:image/png;base64,${userDataStoraged.foto}` } : ImageUser} />
            }
            <AreaEditImg>
                <TxtChangeImg onPress={pickImage}>Editar</TxtChangeImg>
            </AreaEditImg>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: heightPercentageToDP('7'), alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <TxtContact>Telefone:</TxtContact>
                    <TxtTel>{userDataStoraged.telefone}</TxtTel>
                </View>

                <BtnEdit onPress={() => modalTelefone.current?.open()}>
                    <EvilIcons name="pencil" size={RFValue(26)} color={theme.colors.blueStrong} />
                </BtnEdit>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: heightPercentageToDP('7'), alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <TxtContact>Email:</TxtContact>
                    <TxtTel>{userDataStoraged.email}</TxtTel>
                </View>

                <BtnEdit>
                    <MaterialCommunityIcons name="email-check-outline" size={RFValue(17)} color={theme.colors.blueStrong} />
                </BtnEdit>
            </View>



            <Modalize ref={modalTelefone} modalHeight={heightPercentageToDP('50')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Troca de telefone</TitleLogin>

                <Subtitle>Informe seu telefone desejado</Subtitle>

                <MyInput onchangetext={(text) => setTelefoneSms(text)} placeholder='Telefone (Ex. 14999...)' />

                <View style={{ marginTop: heightPercentageToDP('3') }}>
                    <Button onpress={handleSendSMS} title={'Continuar'} />
                </View>

            </Modalize>


            {/* Modal de verificacao de sms */}
            <Modalize ref={modalVerificateSms} modalHeight={heightPercentageToDP('46')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TitleLogin>Preencha o código</TitleLogin>

                <Subtitle>Enviamos um código em seu celular</Subtitle>

                <AreaSmsInput>
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode1(text)} />
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode2(text)} />
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode3(text)} />
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode4(text)} />
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode5(text)} />
                    <InputSms maxLength={1} keyboardType='numeric' onChangeText={(text) => setCode6(text)} />
                </AreaSmsInput>

                <View style={{ marginTop: heightPercentageToDP('7.5') }}>
                    <Button onpress={handleConfirmCode} title={'Verificar'} />
                </View>

            </Modalize>

        </Container>
    );
}