import React, {useState} from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";
import {Button, Form, InputNumber, Space, Tag} from "antd";

function SideBar() {
    const data = [
        {
            "id": 1,
            "to": "",
            "label": "Tất cả danh mục",
            "active": true
        },
        {
            "id": 2,
            "to": "",
            "label": "Món ăn bán chạy nhất",
            "active": false
        },
        {
            "id": 3,
            "to": "",
            "label": "Món ăn mới",
            "active": false
        },
        {
            "id": 4,
            "to": "",
            "label": "Giảm giá hấp dẫn",
            "active": false
        },
        {
            "id": 5,
            "to": "",
            "label": "Đồ uống",
            "active": false
        }
    ]
    const [list, setList] = useState(data);

    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleClick = (id) => {
        const updatedList = list.map(item => ({
            ...item,
            active: item.id === id
        }));
        setList(updatedList);
    };
    return (
        <div className="sidebar">
            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Danh mục sản phẩm</p>
            <ul className="link-p category">
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={item.active ? "link-active" : ""}
                                to={item.to}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Khoảng giá</p>
            <div className="w-full py-5">
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Từ"
                        name="from"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập giá thấp nhất',
                            },
                        ]}
                    >
                        <InputNumber
                            className="w-full"
                            min={0}
                            placeholder="Từ"
                            value={minValue}
                            onChange={(value) => setMinValue(value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Đến"
                        name="to"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập giá cao nhất',
                            },
                        ]}
                    >
                        <InputNumber
                            className="w-full"
                            min={minValue}
                            placeholder="Đến"
                            value={maxValue}
                            onChange={(value) => setMaxValue(value)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="btn-primary mr-2"
                            htmlType="submit">
                            Áp dụng
                        </Button>

                        <Button
                            className="btn-primary mr-2"
                            onClick={() => {
                                setMinValue(0);
                                setMaxValue(0);
                            }}
                        >
                            Xóa
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Nhãn</p>
            <div className="w-full py-5">
                <Space size={[0, 8]} wrap>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Món chay mặn</Tag>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Hàng chay cấp đông</Tag>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Đồ uống</Tag>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Món cơm</Tag>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Rau củ</Tag>
                    <Tag className="cursor-pointer p-2 text-sm gb-tag" color="success">Món nộm</Tag>
                </Space>
            </div>
        </div>
    );
}

export default SideBar;