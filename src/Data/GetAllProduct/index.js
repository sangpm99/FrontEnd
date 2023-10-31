const GetAllProduct = async () => {
    try {
        const response = await fetch("http://localhost:8080/product/getallproduct");
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