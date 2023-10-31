import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {CartContext} from "../../../../ContextProvider";
import Address from "./components/Address";
import getUrlPayment from "../../../../Data/GetUrlPayment";
import {useNavigate} from 'react-router-dom';
import AddNewOrder from "../../../../Data/AddNewOrder";
import AddNewOrderDetail from "../../../../Data/AddNewOrderDetail";

function UserInfo() {
    const navigate = useNavigate();

    const {cart, setCart} = useContext(CartContext);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [originalPrice, setOriginalPrice] = useState(0);
    const [actualPrice, setActualPrice] = useState(0);
    const [note, setNote] = useState("");
    const [paymentId, setPaymentId] = useState(1);

    const [address, setAddress] = useState("");
    const [listAddress, setListAddress] = useState([]);

    useEffect(() => {
        let sum = 0;
        let sumOriginalPrice = 0;
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].discount === 0) {
                sum += (cart[i].price * cart[i].quantity);
            }
            else {
                let newPrice = cart[i].price - (cart[i].discount * cart[i].price / 100);
                sum += (newPrice * cart[i].quantity)
            }
            sumOriginalPrice += (cart[i].price * cart[i].quantity);
        }
        setActualPrice(prevState => sum);
        setOriginalPrice(prevState => sumOriginalPrice);

    }, [cart]);

    useEffect(() => {
        let newStr = listAddress.join("|");
        console.log(newStr);
        setAddress(newStr);
    }, [listAddress]);

    const onFinish = async () => {
        if(paymentId === 1) {
            try {
                const result = await AddNewOrder(
                    fullName,
                    email,
                    phone,
                    address,
                    paymentId,
                    originalPrice,
                    actualPrice,
                    note
                );

                // result returns orderId
                if (result !== 0) {
                    const orderDetailPromises = cart.map(async (item) => {
                        const priceTotal = (item.price - (item.price * (item.discount / 100))) * item.quantity;
                        return AddNewOrderDetail(item.productId, priceTotal, item.quantity, result);
                    });
                    await Promise.all(orderDetailPromises);
                    setCart([]);
                    // setUserInfo({});
                    // setIsSuccess(false);
                    navigate('/paymentsuccess');
                }
            } catch (error) {
                console.error('Lỗi gửi thêm order: ', error);
            }
        }
        else if (paymentId === 2) {
            const result = await getUrlPayment(actualPrice);
            if(result.length !== 0) {
                window.location.href = result;
            }
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <p className="text-xl mb-5">Thông tin thanh toán</p>
            <div className="border p-5 mb-10">
                <Form
                    layout="vertical"
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={{
                        payment: paymentId
                    }}
                >
                    <Form.Item
                        label="Họ tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập họ tên',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập họ tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập số điện thoại',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập email',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Address listAddress={listAddress} setListAddress={setListAddress} />

                    <Form.Item
                        label="Ghi chú"
                        name="note"
                    >
                        <TextArea
                            row={5}
                            placeholder="Nhập ghi chú"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phương thức thanh toán"
                        name="payment"
                    >
                        <Select
                            value={paymentId}
                            onChange={(value) => {
                                setPaymentId(prevState => value);
                            }}
                        >
                            <Select.Option value={1}>Thanh toán khi nhận hàng</Select.Option>
                            <Select.Option value={2}>Thanh toán trực tuyến</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="total"
                    >
                        <p className="font-bold">
                            Tổng thanh toán:&nbsp;
                            <span className="color-primary text-lg">
                                {actualPrice.toLocaleString()} VND
                            </span>
                        </p>
                    </Form.Item>

                    <Form.Item>
                        <p>
                            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                            <span className="text-blue-500"> Điều khoản Polyfood</span>,
                            vui lòng kiểm tra kỹ khi đặt hàng, thao tác này không thể hoàn tác
                        </p>
                    </Form.Item>

                    <Form.Item>
                        <Button className="btn-primary" htmlType="submit">
                            ĐẶT HÀNG
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default UserInfo;