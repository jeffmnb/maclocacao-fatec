import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Alert, Appearance } from "react-native";


export const AuthContext = createContext({});



const { HOST_SERVER_WS } = process.env;

export let userDataStoraged; // DADOS DO USUARIO SALVO NO STORAGE;

//export let allProperties = []; //DADOS BUSCANDO DE TODOS OS IMOVEIS



export const loadUserData = async () => {

    const userStoraged = await AsyncStorage.getItem('userteste');

    userDataStoraged = JSON.parse(userStoraged);

};

export const AuthProvider = ({ children }) => {

    //============================================================================================================   
    // FUNCOES PARA O USUARIO    
    //===========================================================================================================


    useEffect(() => {
        loadUserData();

        setTimeout(() => {
            loadUserData();
            // getAllUsers();
        }, 100);
    }, []);

    const [user, setUser] = useState({});

    const Navigation = useNavigation();

    // FAZ O LOGIN DO USUARIO
    const signIn = async (email, senha) => {

        const userData = {
            email,
            senha
        };

        try {

            const response = await axios.post(`${HOST_SERVER_WS || 'http://.168.0.6:8000'}/user/login`, userData);

            if (response.data.user) {

                //setUser(response.data.user);

                const data = response.data.user;

                console.log(data);

                await AsyncStorage.setItem('userteste', JSON.stringify(data));

                const userStoraged = await AsyncStorage.getItem('userteste');

                userDataStoraged = JSON.parse(userStoraged);

                loadUserData();
                setTimeout(() => {
                    loadUserData();
                }, 200);

                Navigation.navigate('Home');

            } else {
                Alert.alert(response.data.message);
            };
        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }
    };


    // // FAZ O CADASTRO DO USUARIO
    const signUp = async (data) => {

        try {

            const response = await axios.post(`${HOST_SERVER_WS || 'http://192.168.0.6:8000'}/user/cadastro`, data);

            console.log(response.data);

            if (response.data.newUser) {

                //console.log('Dados do servidor: ', response.data.user);

                setUser(response.data.newUser);

                userDataStoraged = response.data.newUser;

                await AsyncStorage.setItem('userteste', JSON.stringify(response.data.newUser));

                const data = await AsyncStorage.getItem('userteste');

                userDataStoraged = JSON.parse(data);

                Navigation.navigate('Home');

                Alert.alert('Conta criada! 😃');

                return true;
            } else {
                Alert.alert(response.data.message);
            };

        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }

    };



    //BUSCA TODOS OS IMOVEIS 
    const getAllProperties = async () => {

        try {
            const response = await axios.get('http://:8000/properties/');

            return response.data.allProperties;

        } catch (error) {
            console.log(error.message);
        };

    };


    //CADASTRA NOVO IMOVEL
    const createNewProp = async (property) => {
        try {
            const response = await axios.post('http://192.168.0.6:8000/properties/cadastro', property);

            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    };



    //ADICIONA IMOVEL FAVORITO
    const setNewFavorite = async (data) => {

        try {

            const response = await axios.put(`http://192.168.0.6:8000/user/addfavorites/${userDataStoraged._id}`, data);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }
    };


    //DELETA UM IMOVEL DO FAVORITO
    const removeFavorite = async (data) => {

        try {

            const response = await axios.put(`http://192.168.0.6:8000/user/removefavorite/${userDataStoraged._id}`, data);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }

    };


    //BUSCA TODOS FAVORITOS
    const getAllFavorites = async () => {

        try {

            const response = await axios.get(`http://192.168.0.6:8000/user/callfavorites/${userDataStoraged._id}`);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }
    };


    //BUSCA POR CATEGORIA   
    const getByCategory = async (category) => {

        try {

            const data = { title: category }

            const response = await axios.post('http://192.168.0.6:8000/properties/propcategoria', data);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }
    };



    //ATUALIZA FOTO DO USER
    const changePhotoUser = async (base64) => {

        try {

            const newPhoto = await axios.put(`http://192.168.0.6:8000/user/trocafoto/${userDataStoraged._id}`, { foto: base64 });

            if (newPhoto.data.newFoto) {
                console.log(newPhoto.data.newFoto);

                await AsyncStorage.setItem('userteste', JSON.stringify(newPhoto.data.newFoto));

                await loadUserData();
            }

            return newPhoto.data;

        } catch (error) {
            console.log(error.message);
        }
    };


    //BUSCA IMOVEIS CADASTRADO PELO USER
    const getAllPropsByUser = async () => {

        try {
            const response = await axios.get(`http://192.168.0.6:8000/user/imoveis/${userDataStoraged._id}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    };


    //CRIA UM NOVO AGENDAMENTO
    const createNewSchedule = async (data) => {
        try {
            const response = await axios.post('http://192.168.0.6:8000/properties/agendamento', data);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }
    };


    //CARREGA AGENDAMENTOS DO USER
    const getAllSchedulesUser = async () => {

        try {

            const response = await axios.get(`http://192.168.0.6:8000/user/myschedules/${userDataStoraged._id}`);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }

    };


    //CANCELA UM DETERMINADO AGENDAMENTO
    const cancelScheduleUser = async (idSchedule) => {

        try {

            const response = await axios.delete(`http://192.168.0.6:8000/properties/cancelchedule/${idSchedule}`);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }

    };


    //BUSCA IMOVEIS DISPONIVEIS POR INTERVALO
    const getPropByInterval = async (dates) => {
        try {

            const result = await axios.post('http://192.168.0.6:8000/properties/propbydate', dates);

            return result.data;


        } catch (error) {
            console.log(error.message);
        }
    };


    //DELETA IMOVEL PARA USUARIO   
    const deleteUserProp = async (idProp) => {

        try {

            const result = await axios.delete(`http://192.168.0.6:8000/user/deleletepropuser/${userDataStoraged._id}/${idProp}`);

            return result.data;

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, userDataStoraged, signIn, signUp, getAllProperties, createNewProp, getAllFavorites, getByCategory, setNewFavorite, removeFavorite, changePhotoUser, getAllPropsByUser, createNewSchedule, getAllSchedulesUser, cancelScheduleUser, getPropByInterval, deleteUserProp }}>
            {children}
        </AuthContext.Provider>
    )
};