import React, {useState} from 'react';

import './Purchase.scss';
import FrameDefault from "../Frame/FrameDefault";
import {Link} from "react-router-dom";
import {Button, Empty, Modal, Table} from "antd";
import Bread from "../Frame/Breadcrumb";

function Purchase() {
    const menu = [
        {
            "id": 1,
            "to": "",
            "label": "Chờ xác nhận",
            "active": true
        },
        {
            "id": 2,
            "to": "",
            "label": "Chờ lấy hàng",
            "active": false
        },
        {
            "id": 3,
            "to": "",
            "label": "Đang giao",
            "active": false
        },
        {
            "id": 4,
            "to": "",
            "label": "Đã giao",
            "active": false
        },
        {
            "id": 5,
            "to": "",
            "label": "Đã hủy",
            "active": false
        },
        {
            "id": 6,
            "to": "",
            "label": "Đánh giá",
            "active": false
        }
    ]
    const [list, setList] = useState(menu);
    const [empty, setEmpty] = useState(false);

    const handleClick = (id) => {
        const updatedList = list.map(item => ({
            ...item,
            active: item.id === id
        }));
        setList(updatedList);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã đơn hàng',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Ngày tạo đơn',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Xem chi tiết',
            key: 'detail',
            render: (_, record) => (
                <Button
                    onClick={() => setModal2Open(true)}
                    className="btn-primary">
                    Xem
                </Button>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            code: 'poly__202309201505455751',
            date: '15:05:45 20/09/2023',
        },
        {
            key: '2',
            code: 'poly__202309201458086244',
            date: '14:58:08 20/09/2023',
        },
        {
            key: '3',
            code: 'poly__202309200947243532',
            date: '09:47:24 20/09/2023',
        },
    ];

    const [modal2Open, setModal2Open] = useState(false);

    return (
        <div>
            <FrameDefault>
                <Bread>Đơn Hàng</Bread>
                <div className="my-category flex justify-between p-body">
                    <div className="w-2/12">
                        <div className="sidebar">
                            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Thông tin đơn hàng</p>
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
                        </div>
                    </div>
                    <div className="w-9/12">

                        {
                            empty ? <Empty description="Chưa có thông tin" /> :
                            list.map(item => {
                                if(item.active) {
                                    return (
                                        <>
                                            <p className="pe-5 pb-3 text-xl gb-border-bot-2 mb-5 inline-block">{item.label}</p>

                                            <Table
                                                className="my-table"
                                                columns={columns}
                                                dataSource={data}
                                                pagination={false}
                                            />
                                            <Modal
                                                title="Thông tin đơn hàng: poly__202309201505455751"
                                                width="40%"
                                                centered
                                                open={modal2Open}
                                                onOk={() => setModal2Open(false)}
                                                onCancel={() => setModal2Open(false)}
                                                footer={null}
                                            >
                                                <div className="w-full">
                                                    <div className="flex">
                                                        <div className="w-1/2">
                                                            <p><b>Họ tên: </b>Phạm Minh Sáng</p>
                                                            <p><b>Địa chỉ: </b>Số 10 Hồ Tùng Mậu, Từ Liêm, Hà Nội</p>
                                                            <p><b>Ngày tạo đơn: </b>15:05:45 20/09/2023</p>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <p><b>Số điện thoại: </b>0329091878</p>
                                                            <p><b>Phương thức thanh toán: </b>Thanh toán khi nhận hàng</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex border my-5">
                                                        <div className="w-1/5">
                                                            <Link to="">
                                                                <img src={require("../../imgs/ca-thu-kho-to-chay.png")} alt="Cá thu kho tộ chay"/>
                                                            </Link>
                                                        </div>

                                                        <div className="w-4/5 p-3 flex flex-col justify-between">
                                                            <Link className="link-primary" to="">
                                                                <p className="capitalize font-bold">Cá thu kho tộ chay</p>
                                                            </Link>

                                                            <p>
                                                                <span>
                                                                    <span className="color-primary">
                                                                        95,000 VND
                                                                    </span>
                                                                    <span className="px-2">
                                                                        -
                                                                    </span>
                                                                </span>
                                                                <span className="sub-text line-through">100,000 VND</span>
                                                            </p>

                                                            <p className="font-bold">
                                                                Tổng cộng: <span className="color-primary">95,000 VND</span>
                                                            </p>

                                                        </div>
                                                    </div>

                                                    <div className="flex border my-5">
                                                        <div className="w-1/5">
                                                            <Link to="">
                                                                <img src={require("../../imgs/dau-bap-dong-nai.png")} alt="Đậu bắp đồng nai"/>
                                                            </Link>
                                                        </div>

                                                        <div className="w-4/5 p-3 flex flex-col justify-between">
                                                            <Link className="link-primary" to="">
                                                                <p className="capitalize font-bold">Đậu bắp đồng nai</p>
                                                            </Link>

                                                            <p>
                                                                <span>
                                                                    <span className="color-primary">
                                                                        10,000 VND
                                                                    </span>
                                                                    <span className="px-2">
                                                                        -
                                                                    </span>
                                                                </span>
                                                                <span className="sub-text line-through">20,000 VND</span>
                                                            </p>

                                                            <p className="font-bold">
                                                                Tổng cộng: <span className="color-primary">10,000 VND</span>
                                                            </p>

                                                        </div>
                                                    </div>

                                                    <div className="flex border my-5">
                                                        <div className="w-1/5">
                                                            <Link to="">
                                                                <img src={require("../../imgs/banh-goi.png")} alt="Bánh gối"/>
                                                            </Link>
                                                        </div>

                                                        <div className="w-4/5 p-3 flex flex-col justify-between">
                                                            <Link className="link-primary" to="">
                                                                <p className="capitalize font-bold">Bánh gối</p>
                                                            </Link>

                                                            <p>
                                                                <span>
                                                                    <span className="color-primary ">
                                                                        40,000 VND
                                                                    </span>
                                                                    <span className="px-2">
                                                                        -
                                                                    </span>
                                                                </span>
                                                                <span className="sub-text line-through">50,000 VND</span>
                                                            </p>

                                                            <p className="font-bold">
                                                                Tổng cộng: <span className="color-primary">40,000 VND</span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <Button className="btn-primary">
                                                            In hóa đơn
                                                        </Button>
                                                        <p className="font-bold">
                                                            Tổng hóa đơn: <span className="color-primary text-lg">400,000 VND</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </FrameDefault>
        </div>
    );
}

export default Purchase;