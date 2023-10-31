import axios from 'axios';
import {HOST} from '../Constants';

const GetUrlPayment = async (amount) => {
    try {
        const response = await axios.get(`${HOST}/payment/geturlpayment?amount=${amount}`)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default GetUrlPayment;