import axios from 'axios';

const GetProductTypeByProductId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/product/gettypeofproductbyproductid?id=${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default GetProductTypeByProductId;
