import axios from 'axios';

const GetUrlPayment = async (amount) => {
    try {
        const response = await axios.get(`http://localhost:8080/payment/geturlpayment?amount=${amount}`)
        return response.data;
    } catch (error) {
    throw error;
}
};

export default GetUrlPayment;