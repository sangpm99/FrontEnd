import axios from 'axios';

const AddNewOrder = async (fullName,
                           email,
                           phone,
                           address,
                           paymentId,
                           originalPrice,
                           actualPrice,
                           note) => {
    try {
        const apiUrl = "http://localhost:8080/order/addneworder";
        const order = {
            "fullName": fullName,
            "email": email,
            "phone": phone,
            "address": address,
            "paymentId": paymentId,
            "originalPrice": originalPrice,
            "actualPrice": actualPrice,
            "note": note
        };
        const response = await axios.post(apiUrl, order, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default AddNewOrder;