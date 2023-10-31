import axios from 'axios';
import {HOST} from '../Constants';
const GetProductDetailByProductId = async (id) => {
    try {
        const response = await axios.get(`${HOST}/product/getproductdetailbyproductid?id=${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default GetProductDetailByProductId;
