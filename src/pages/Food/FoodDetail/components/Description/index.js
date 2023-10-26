import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import GetProductDetailByProductId from "../../../Data/GetProductDetailByProductId";

function Description({id}) {
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        GetProductDetailByProductId(id).then((data) => {
            setProductDetail(data);
        });

        const fetchDataProductDetail = async () => {
            try {
                const data = await GetProductDetailByProductId(id);
                setProductDetail(data);
            }
            catch (error) {
                console.error('Lỗi fetch dữ liệu Product Detail: ', error);
            }
        }

        fetchDataProductDetail();
    }, [id]);


    return (
        <Tabs
            type="card"
            items={[
                {
                    key: '1',
                    label: 'Mô tả sản phẩm',
                    children:
                        <p className="text-sm text-justify">
                            {
                                productDetail.length === 0 ? "Chưa có mô tả" : (
                                    productDetail.map((element, index) => (
                                        <>
                                            <p className="py-1" key={index}>{element}</p>
                                            <br/>
                                        </>
                                    ))
                                )
                            }
                        </p>
                },
                {
                    key: '2',
                    label: 'Đánh giá',
                    children: <p className="text-sm text-justify">
                        Chưa có nội dung đánh giá
                    </p>,
                },
            ]}
            animated={true}
        />
    );
}

export default Description;