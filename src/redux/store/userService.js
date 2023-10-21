import axios from "axios";
import { getToken } from "../../middleware/authMiddleware";


const API_URL = 'http://127.0.0.1:4000/';
const importData = async (formData) => {
    try {
        const tokenInfo = getToken();
        const response = await axios.post(API_URL + 'user/import', JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenInfo.token}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }

};

const userImports = async () => {
    try {
        const tokenInfo = getToken();
        const response = await axios.get(API_URL + 'user/import', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenInfo.token}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const userService = {
    importData, userImports
}