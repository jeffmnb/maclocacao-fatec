import React, { useCallback, useContext, useRef, useState } from 'react';

import {
    Container,
    Title,
    SubTitle,
    TitleModal,
    InputDescription,
    TxtDescription,
    TxtChoose,
    TxtCategories,
    TxtInfo,
    ButtonImage,
    TxtPhoto,
    AreaButtons,
    ImageProp
} from './styles';

import { Button } from '../../components/Button';
import { MyInputProp } from '../../components/MyInputProp';
import { Modalize } from 'react-native-modalize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';

import { CheckBox } from 'react-native-elements';

import { userDataStoraged } from '../../hooks/auth';

import RNPickerSelect from 'react-native-picker-select';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

import { AuthContext } from '../../hooks/auth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Buffer } from "buffer"
import { TouchableOpacity } from 'react-native';


export const CreateProp = () => {

    useFocusEffect(useCallback(() => {
        setImageProp1(null);
        setImageProp2(null);
        setImageProp3(null);
        setImageProp4(null);
        setImageProp5(null);
        setImageProp6(null);
    }, [modal5]));

    const { createNewProp } = useContext(AuthContext);

    const Navigation = useNavigation();

    const modalInfo = useRef(false);
    const modal2 = useRef(false);
    const modal3 = useRef(false);
    const modal4 = useRef(false);
    const modal5 = useRef(false);
    const modal6 = useRef(false);



    const [arCond, setArCond] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [restaurante, setRestaurante] = useState(false);
    const [suite, setSuite] = useState(false);


    const [nomeProp, setNomeProp] = useState(null);
    const [descProp, setDescProp] = useState(null);
    const [cidadeProp, setCidadeProp] = useState(null);
    const [ruaProp, setRuaProp] = useState(null);
    const [numeroProp, setNumeroProp] = useState(null);
    const [estadoProp, setEstadoProp] = useState(null);
    const [agreePet, setAgreePet] = useState(false);
    const [priceProp, setPriceProp] = useState(null);
    const [areaProp, setAreaProp] = useState(null);
    const [numBedProp, setNumBedProp] = useState(null);
    const [numBathProp, setNumBathProp] = useState(null);



    const [ImageProp1, setImageProp1] = useState(null);
    const [ImageProp2, setImageProp2] = useState(null);
    const [ImageProp3, setImageProp3] = useState(null);
    const [ImageProp4, setImageProp4] = useState(null);
    const [ImageProp5, setImageProp5] = useState(null);
    const [ImageProp6, setImageProp6] = useState(null);


    const handleStart = () => {
        modalInfo.current?.open();
    };


    const pickImage = async (setPhoto) => {

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

            setPhoto(pickerResult.base64);

        } else {
            setImageUser('');
        }
    };

    const callCreateProp = async () => {

        const dataProp = {
            nome: nomeProp,
            descricao: descProp,
            endereco: {
                cidade: cidadeProp,
                rua: ruaProp,
                numero: numeroProp,
                estado: estadoProp
            },
            permAnimais: agreePet,
            actions: [
                arCond == true && { title: 'Ar cond.' },
                wifi == true && { title: 'Wifi' },
                restaurante == true && { title: 'Restaurante' },
                suite == true && { title: 'Suíte' }
            ],
            price: priceProp,
            details: {
                area: areaProp,
                numBed: numBedProp,
                numBath: numBathProp
            },
            fotos:
                [
                    ImageProp1 != null ? ImageProp1 : null,
                    ImageProp2 != null ? ImageProp2 : null,
                    ImageProp3 != null ? ImageProp3 : null,
                    ImageProp4 != null ? ImageProp4 : null,
                    ImageProp5 != null ? ImageProp5 : null,
                    ImageProp6 != null ? ImageProp6 : null,
                ],
            dono: {
                id: userDataStoraged._id,
                nome: userDataStoraged.nome,
                telefone: userDataStoraged.telefone
            },

        };

        const response = await createNewProp(dataProp);
        console.log(response);

        if (response.newProperties) {
            Alert.alert('Imóvel cadastrado com sucesso!');
            Navigation.navigate('Home');
        }

    };


    return (
        <Container>

            <Title>Compartilhe seu imóvel 🏠</Title>

            <SubTitle>Possui um imóvel? Publique agora mesmo {'\n'} para que as pessoas possam alugar.</SubTitle>

            <Button title={'Começar'} onpress={handleStart} />


            <Modalize ref={modalInfo} modalHeight={heightPercentageToDP('65')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TitleModal>Heyy {userDataStoraged.nome}, nos conte sobre seu imóvel 😃</TitleModal>

                <MyInputProp onchangetext={(text) => setNomeProp(text)} placeholder='Nome' />


                <TxtDescription>Faça uma breve descrição:</TxtDescription>

                <InputDescription onChangeText={(text) => setDescProp(text)} multiline />

                <View style={{ marginTop: heightPercentageToDP('5.5') }}>
                    <Button onpress={() => {
                        modalInfo.current?.close();
                        modal2.current?.open();
                    }} title={'Continuar'} />
                </View>

            </Modalize>


            <Modalize ref={modal2} scrollViewProps={{ showsVerticalScrollIndicator: false }} modalHeight={heightPercentageToDP('80')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TitleModal>Heyy {userDataStoraged.nome}, nos conte sobre seu imóvel 😃</TitleModal>


                <TxtChoose>Em qual estado se encontra?</TxtChoose>

                <RNPickerSelect
                    onValueChange={(value) => setEstadoProp(value)}
                    items={[
                        { label: 'AC', value: 'AC' },
                        { label: 'AL', value: 'AL' },
                        { label: 'AP', value: 'AP' },
                        { label: 'AM', value: 'AM' },
                        { label: 'BA', value: 'BA' },
                        { label: 'CE', value: 'CE' },
                        { label: 'DF', value: 'DF' },
                        { label: 'ES', value: 'ES' },
                        { label: 'GO', value: 'GO' },
                        { label: 'MA', value: 'MA' },
                        { label: 'MT', value: 'MT' },
                        { label: 'MS', value: 'MS' },
                        { label: 'MG', value: 'MG' },
                        { label: 'PA', value: 'PA' },
                        { label: 'PB', value: 'PB' },
                        { label: 'PR', value: 'PR' },
                        { label: 'PE', value: 'PE' },
                        { label: 'PI', value: 'PI' },
                        { label: 'RJ', value: 'RJ' },
                        { label: 'RN', value: 'RN' },
                        { label: 'RS', value: 'RS' },
                        { label: 'RO', value: 'RO' },
                        { label: 'RR', value: 'RR' },
                        { label: 'SC', value: 'SC' },
                        { label: 'SP', value: 'SP' },
                        { label: 'SE', value: 'SE' },
                        { label: 'TO', value: 'TO' }
                    ]}
                    doneText='Pronto'
                    placeholder={{ label: 'Escolher' }}
                    style={{ inputIOS: { marginBottom: heightPercentageToDP('6'), alignSelf: 'center', width: widthPercentageToDP('35'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight }, inputAndroid: { alignSelf: 'center', width: widthPercentageToDP('35'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight } }}
                />


                <MyInputProp onchangetext={(text) => setCidadeProp(text)} placeholder={'Cidade'} />
                <MyInputProp onchangetext={(text) => setRuaProp(text)} placeholder={'Rua'} />
                <MyInputProp onchangetext={(text) => setNumeroProp(text)} placeholder={'Número'} />

                <View style={{ marginTop: heightPercentageToDP('5.5') }}>
                    <Button onpress={() => {
                        modal2.current?.close();
                        modal3.current?.open();
                    }} title={'Continuar'} />
                </View>

            </Modalize>



            <Modalize ref={modal3} modalHeight={heightPercentageToDP('75')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TitleModal>Heyy {userDataStoraged.nome}, nos conte sobre seu imóvel 😃</TitleModal>

                <TxtChoose>Aceita entrada de pets?</TxtChoose>

                <CheckBox
                    title={agreePet == false ? 'Não' : 'Sim'}
                    checkedIcon="check"
                    uncheckedIcon="close"
                    checkedColor='green'
                    uncheckedColor='red'
                    checked={agreePet}
                    onPress={() => setAgreePet(!agreePet)}
                    containerStyle={{ width: widthPercentageToDP('24'), alignSelf: 'center', backgroundColor: 'transparent' }}
                />


                <TxtCategories>Escolha as opções que seu imóvel possui:</TxtCategories>

                <View style={{ width: widthPercentageToDP('80'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: heightPercentageToDP('3') }}>
                    <CheckBox
                        title={arCond == false ? 'Ar Condicionado' : 'Ar Condicionado'}
                        checkedIcon="check"
                        uncheckedIcon="close"
                        checkedColor='green'
                        uncheckedColor='red'
                        checked={arCond}
                        onPress={() => setArCond(!arCond)}
                        containerStyle={{ width: widthPercentageToDP('38'), alignSelf: 'center', backgroundColor: 'transparent' }}
                    />

                    <CheckBox
                        title={wifi == false ? 'WIFI' : 'WIFI'}
                        checkedIcon="check"
                        uncheckedIcon="close"
                        checkedColor='green'
                        uncheckedColor='red'
                        checked={wifi}
                        onPress={() => setWifi(!wifi)}
                        containerStyle={{ width: widthPercentageToDP('25'), alignSelf: 'center', backgroundColor: 'transparent' }}
                    />
                </View>


                <View style={{ width: widthPercentageToDP('80'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: heightPercentageToDP('3') }} s>
                    <CheckBox
                        title={restaurante == false ? 'Restaurante' : 'Restaurante'}
                        checkedIcon="check"
                        uncheckedIcon="close"
                        checkedColor='green'
                        uncheckedColor='red'
                        checked={restaurante}
                        onPress={() => setRestaurante(!restaurante)}
                        containerStyle={{ width: widthPercentageToDP('38'), alignSelf: 'center', backgroundColor: 'transparent' }}
                    />


                    <CheckBox
                        title={suite == false ? 'Suíte' : 'Suíte'}
                        checkedIcon="check"
                        uncheckedIcon="close"
                        checkedColor='green'
                        uncheckedColor='red'
                        checked={suite}
                        onPress={() => setSuite(!suite)}
                        containerStyle={{ width: widthPercentageToDP('25'), alignSelf: 'center', backgroundColor: 'transparent' }}
                    />
                </View>



                <View style={{ marginTop: heightPercentageToDP('5.5') }}>
                    <Button onpress={() => {
                        modal3.current?.close();
                        modal4.current?.open();
                    }} title={'Continuar'} />
                </View>

            </Modalize>


            <Modalize ref={modal4} modalHeight={heightPercentageToDP('78')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TitleModal>Heyy {userDataStoraged.nome}, nos conte sobre seu imóvel 😃</TitleModal>

                <MyInputProp onchangetext={(text) => setPriceProp(text)} placeholder='Preço / Diária' />


                <MyInputProp onchangetext={(text) => setAreaProp(text)} placeholder='Área aproximada em m2' />

                <View style={{ marginTop: heightPercentageToDP('1.5') }}>
                    <TxtChoose>Número de quartos:</TxtChoose>

                    <RNPickerSelect
                        onValueChange={(value) => setNumBedProp(value)}
                        items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5 ou mais', value: '5 ou mais' },

                        ]}
                        doneText='Pronto'
                        placeholder={{ label: 'Escolher' }}
                        style={{ inputIOS: { marginBottom: heightPercentageToDP('3'), alignSelf: 'center', width: widthPercentageToDP('20'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight }, inputAndroid: { alignSelf: 'center', width: widthPercentageToDP('20'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight } }}
                    />
                </View>

                <View style={{ marginTop: heightPercentageToDP('1.5') }}>
                    <TxtChoose>Número de banheiros:</TxtChoose>

                    <RNPickerSelect
                        onValueChange={(value) => setNumBathProp(value)}
                        items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5 ou mais', value: '5 ou mais' },

                        ]}
                        doneText='Pronto'
                        placeholder={{ label: 'Escolher' }}
                        style={{ inputIOS: { alignSelf: 'center', width: widthPercentageToDP('20'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight }, inputAndroid: { alignSelf: 'center', width: widthPercentageToDP('20'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.grayLight } }}
                    />
                </View>

                <View style={{ marginTop: heightPercentageToDP('5.5') }}>
                    <Button onpress={() => {
                        modal4.current?.close();
                        modal5.current?.open();
                    }} title={'Continuar'} />
                </View>

            </Modalize>


            <Modalize ref={modal5} scrollViewProps={{ showsVerticalScrollIndicator: false }} modalHeight={heightPercentageToDP('80')} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} modalStyle={{ borderTopLeftRadius: RFValue(25), borderTopRightRadius: RFValue(25), backgroundColor: theme.colors.white, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TxtPhoto>Adicione suas fotos 💙</TxtPhoto>

                <View style={{ bottom: heightPercentageToDP('4.5'), flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesome5 name="info-circle" size={RFValue(19)} color={theme.colors.blue} />
                    <TxtInfo>Limite de 6 fotos pelo App.</TxtInfo>
                </View>


                <AreaButtons>
                    {
                        ImageProp1 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp1)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp1}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp1)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }



                    {
                        ImageProp2 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp2)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp2}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp2)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }

                </AreaButtons>

                <AreaButtons>
                    {
                        ImageProp3 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp3)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp3}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp3)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }



                    {
                        ImageProp4 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp4)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp4}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp4)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }

                </AreaButtons>



                <AreaButtons>
                    {
                        ImageProp5 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp5)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp5}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp5)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }


                    {
                        ImageProp6 != null ?

                            <TouchableOpacity onPress={() => pickImage(setImageProp6)}>
                                <ImageProp width={RFValue(90)} height={RFValue(90)} source={{ uri: `data:image/png;base64,${ImageProp6}` }} />
                            </TouchableOpacity>

                            :

                            <ButtonImage onPress={() => pickImage(setImageProp6)}>
                                <MaterialIcons name="add-photo-alternate" size={RFValue(37)} color={theme.colors.gray} />
                            </ButtonImage>
                    }

                </AreaButtons>





                <View style={{ marginTop: heightPercentageToDP('5.5') }}>
                    <Button onpress={callCreateProp}
                        title={'Termimar'} />
                </View>

            </Modalize>

        </Container>
    );
}