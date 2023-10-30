import axios from 'axios';

const AddNewOrderDetail = async (productId,
                                 priceTotal,
                                 quantity,
                                 orderId) => {
    try {
        const apiUrl = `http://localhost:8080/order/addneworderdetail?orderId=${orderId}`;
        const orderDetail = {
            "productId": productId,
            "priceTotal": priceTotal,
            "quantity": quantity
        };
        const response = await axios.post(apiUrl, orderDetail, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export default AddNewOrderDetail;