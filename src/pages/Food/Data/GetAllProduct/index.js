const GetAllProduct = () => {
    try {
        return fetch("http://localhost:8080/product/getallproduct")
            .then(res => res.json())
    }
    catch (error) {
        console.error("error", error);
    }
};

export default GetAllProduct;