import axios from 'axios';

const GetProductDetailByProductId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/product/getproductdetailbyproductid?id=${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default GetProductDetailByProductId;
