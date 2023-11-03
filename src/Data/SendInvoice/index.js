import axios from 'axios';
import {HOST} from '../Constants';

const SendInvoice = async (email, body) => {
    try {
        const apiUrl = `${HOST}/order/sendinvoice`;
        const request = {
            "email": email,
            "body": body
        };
        const response = await axios.post(apiUrl, request, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default SendInvoice;