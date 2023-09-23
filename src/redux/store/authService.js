import axios from "axios";
const headers = {
    'Content-Type': 'application/json'
}
const API_URL = 'http://127.0.0.1:4000/';
const login = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'user/login', JSON.stringify(userData), {
            headers
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }

};

const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'user/signup', JSON.stringify(userData), {
            headers
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    login, register
};

export default authService;