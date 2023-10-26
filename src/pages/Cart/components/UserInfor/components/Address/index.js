import React from 'react';
import {Form} from "antd";
import TextArea from "antd/es/input/TextArea";

function Address(props) {
    const {address, setAddress} = props;
    return (
        <Form.Item
            label="Nhập địa chỉ"
            name="address"
            rules={[
                {
                    required: true,
                    message: 'Hãy nhập địa chỉ',
                },
            ]}
        >
            <TextArea
                row={4}
                placeholder="Nhập địa chỉ"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
        </Form.Item>
    );
}

export default Address;