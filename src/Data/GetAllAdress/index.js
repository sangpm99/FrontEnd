import axios from 'axios';

const GetAllAddress = async () => {
    axios.get(`https://provinces.open-api.vn/api/?depth=3`)
        .then((response) => {
            const provinces = response.data;
            console.log('Danh sách tỉnh thành:', provinces);
        })
        .catch((error) => {
            console.error('Lỗi khi lấy danh sách tỉnh thành:', error);
        });
};

export default GetAllAddress;