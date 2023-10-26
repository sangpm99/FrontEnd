import React, {useContext, useEffect, useState} from 'react';
import FrameDefault from "../Frame/FrameDefault";
import {Link} from "react-router-dom";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import {Button, Empty, Modal, Result} from 'antd';
import Bread from "../Frame/Breadcrumb";
import {Context} from "../../CartContextProvider";
import UserInfo from "./components/UserInfor";
function Cart() {
    const {cart, setCart} = useContext(Context);
    let updatedCart = [...cart];

    const [done, setDone] = useState(false);

    const [empty, setEmpty] = useState(true);

    const [modal2Open, setModal2Open] = useState(false);

    useEffect(() => {
        if(cart.length !== 0) {
            setEmpty(false);
        }
        else {setEmpty(true)}
    }, [empty, cart]);

    const increase = (id) => {
        for(let i = 0; i < updatedCart.length; i++) {
            if(updatedCart[i].productId === id) {
                updatedCart[i].quantity++;
                break;
            }
        }
        setCart(updatedCart);
        console.log(updatedCart);
    };
    const decline = (id) => {
        for(let i = 0; i < updatedCart.length; i++) {
            if(updatedCart[i].productId === id) {
                if(updatedCart[i].quantity === 1) {
                    setModal2Open(true);
                }
                else {
                    updatedCart[i].quantity--;
                    break;
                }
            }
        }
        setCart(updatedCart);
    };

    const handleRemove = (id) => {
        const indexToRemove = updatedCart.findIndex(item => item.productId === id);
        if (indexToRemove !== -1) {
            updatedCart.splice(indexToRemove, 1);
            setCart([...updatedCart]); // Update the cart state
        }
    }


    return (
        <div>
            <FrameDefault>
                <Bread>Giỏ Hàng</Bread>
                {
                    empty
                        ?
                            done
                            ?
                                <Result
                                    className="color-primary"
                                    icon={
                                        <div className="flex justify-center">
                                            <img width="200px" src={require("../../imgs/food-success.png")} alt="success"/>
                                        </div>
                                    }
                                    title="Đặt hàng thành công!"
                                    subTitle="Thông tin đơn hàng sẽ được chuyển đến mail của quý khách trong ít phút nữa, cảm ơn vì đã mua hàng !"
                                    extra={[
                                        <Button href="/" className="btn-primary">Trang Chủ</Button>,
                                    ]}
                                />
                            :
                            <Empty className="py-20" description="Chưa có thông tin" />
                        :
                <div className="cart flex p-body gap-x-20">
                    <div className="w-2/3">
                        <p className="text-xl mb-5">Giỏ hàng</p>
                        {
                            cart.map((item, index) => (
                                <div key={index} className="flex border my-5">
                                    <div className="w-1/5">
                                        <Link to="">
                                            <img src={require(`../../imgs/${item["avatarImageProduct"]}`)} alt="Cá thu kho tộ chay"/>
                                        </Link>
                                    </div>

                                    <div className="w-4/5 p-5 flex flex-col justify-between">
                                        <Link className="link-primary" to="">
                                            <p className="capitalize text-lg font-bold">{item["nameProduct"]}</p>
                                        </Link>

                                        <p>
                                            {
                                                item["discount"] !== 0 &&
                                                <span>
                                            <span className="font-bold color-primary text-lg">
                                                {
                                                    (item["price"] - (item["discount"] * item["price"] / 100)).toLocaleString()
                                                } VND
                                            </span>
                                            <span className="px-2">
                                                -
                                            </span>
                                            </span>
                                            }
                                            <span
                                                className = {
                                                    item["discount"] !== 0 ? "sub-text line-through" : "font-bold color-primary text-lg"}
                                            >
                                            {item["price"].toLocaleString()} VND
                                        </span>
                                        </p>

                                        <ButtonGroup className="flex items-center">
                                            <Button
                                                className="btn-primary rounded-none"
                                                onClick={() => decline(item.productId)} icon={<MinusOutlined />}
                                            />

                                            <p className="px-5">{item.quantity}</p>
                                            <Button
                                                className="btn-primary rounded-none"
                                                onClick={() => increase(item.productId)} icon={<PlusOutlined />}
                                            />

                                            <Modal
                                                title={<p className="color-primary">Đây là sản phẩm cuối, bạn có chắc muốn xóa không</p>}
                                                centered
                                                open={modal2Open}
                                                onOk={() => setModal2Open(false)}
                                                onCancel={() => setModal2Open(false)}
                                                footer={[
                                                    <div className="flex">
                                                        <Button
                                                            onClick={() => {
                                                                setModal2Open(false);
                                                                handleRemove(item.productId)
                                                            }}
                                                            className="w-1/2 btn-primary" key="1">Có</Button>,
                                                        <Button
                                                            onClick={() => setModal2Open(false)}
                                                            className="w-1/2" key="2">Không</Button>,
                                                    </div>
                                                ]}
                                            />
                                        </ButtonGroup>

                                        <p className="font-bold text-lg">
                                            Tổng cộng:&nbsp;
                                            {
                                                item["discount"] !== 0 &&
                                                <span>
                                                    <span className="font-bold color-primary text-lg">
                                                        {
                                                            ((item["price"] - (item["discount"] * item["price"] / 100)) * item["quantity"]).toLocaleString()
                                                        } VND
                                                    </span>
                                                </span>
                                            }
                                            <span
                                                className = {
                                                    item["discount"] !== 0 ? "hidden" : "font-bold color-primary text-lg"}
                                            >
                                            {(item["price"] * item["quantity"]).toLocaleString()} VND
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="w-1/3">
                        <UserInfo done={{done, setDone}}/>
                    </div>
                </div>
                }
            </FrameDefault>
        </div>
    );
}

export default Cart;