import axios from 'axios';
import {HOST} from '../Constants';
const GetProductTypeByProductId = async (id) => {
    try {
        const response = await axios.get(`${HOST}/product/gettypeofproductbyproductid?id=${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default GetProductTypeByProductId;
