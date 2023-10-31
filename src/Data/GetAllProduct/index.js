import {HOST} from '../Constants';

const GetAllProduct = async () => {
    try {
        const response = await fetch(`${HOST}/product/getallproduct`);
        if (!response.ok) {
            throw new Error(`Lỗi khi fetch dữ liệu: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
        throw error; // Re-throw the error for the component to handle if needed
    }
};

export default GetAllProduct;