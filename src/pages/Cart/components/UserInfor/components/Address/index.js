import React from 'react';
import City from "./City";
import {Form} from 'antd';

function Address(props) {
    const {listAddress, setListAddress} = props;
    const host = "https://provinces.open-api.vn/api/";
    return (
        <>
            <Form.Item
                label="Chọn địa chỉ"
                name="address"
            >
                <City host={host} listAddress={listAddress} setListAddress={setListAddress}/>
            </Form.Item>
        </>
    );
}

export default Address;