import axios from 'axios';
import { Alert } from 'react-native';

//faz login
export const loginUser = async (email, senha) => {

    try {

        const userData = {
            email,
            senha
        };

        const response = await axios.post('http://10.0.46.210:8000/user/login', userData);

        if (response.data.user) {
            return true;
        } else {
            Alert.alert(response.data.message);
        }

    } catch (err) {
        if (err.message == 'Network Error') {
            Alert.alert('Opss, sem conexão.');
        } else {
            Alert.alert(err.message);
        }
    }
};



//envia sms de recuperacao de senha
export const recoverPass = ({ numberUser }) => {

    try {

        const number = numberUser;

        const response = axios.post('http://10.0.46.210:8000/user/enviasmsvalidacao', number);

    } catch (error) {
        Alert.alert('Não foi possível enviar SMS.');
    }
};