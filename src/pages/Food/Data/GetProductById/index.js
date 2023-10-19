const GetProductById = (id) => {
    const apiUrl = "http://localhost:8080/product/getproductbyid";
    const params = new URLSearchParams({ id: id });
    const urlWithParams = `${apiUrl}?${params}`;
    return fetch(urlWithParams)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

export default GetProductById;