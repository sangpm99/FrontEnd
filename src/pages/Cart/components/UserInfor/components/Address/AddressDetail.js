import React, {useEffect, useState} from 'react';
import TextArea from "antd/es/input/TextArea";

function AddressDetail(props) {
    const {listAddress, setListAddress} = props;
    const [addressDetail, setAddressDetail] = useState("");

    useEffect(() => {
        const newArr = [...listAddress];

        newArr[3] = addressDetail;
        setListAddress(newArr);

    }, [addressDetail]);
    return (
        <TextArea
            rows={4}
            placeholder="Nhập địa chỉ chi tiết (Số nhà, đường, ngõ, ...)"
            onChange={(e) => setAddressDetail(e.target.value)}
        />
    );
}

export default AddressDetail;