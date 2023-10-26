import React from 'react';
import './Footer.scss';
import { SiFacebook, SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si';
import {RiTwitterXFill} from 'react-icons/ri';
import {IoIosArrowForward} from 'react-icons/io';
import {Link} from "react-router-dom";
import {Divider} from "antd";
import { Button, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Footer(props) {
    return (
        <div className="footer bg-primary pt-20">
            <div className="flex p-body">
                <div className="w-3/12 text-white me-20">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <img src={require("../../../../imgs/logo-white.png")} alt="logo"/>
                        </div>

                        <div className="w-2/3">
                            <p className="pe-2 text-4xl font-bold heading-style line-height-2-5">Poly Food</p>
                        </div>
                    </div>
                    <p className="text-justify italic mt-5">
                        Poly Food là nhà hàng Thuần chay và Cung cấp thực phẩm chay, đảm bảo chất lượng, giá cả phải chăng
                    </p>
                    <p className="flex mt-5">
                        <Link className="me-5 text-xl" to="https://www.facebook.com/" target="_blank"><SiFacebook /></Link>
                        <Link className="me-5 text-xl" to="https://www.instagram.com/" target="_blank"><SiInstagram /></Link>
                        <Link className="me-5 text-xl" to="https://www.youtube.com/" target="_blank"><SiYoutube /></Link>
                        <Link className="me-5 text-xl" to="https://www.tiktok.com/" target="_blank"><SiTiktok /></Link>
                        <Link className="me-5 text-xl" to="https://twitter.com/" target="_blank"><RiTwitterXFill /></Link>
                    </p>
                </div>

                <div className="w-3/12 text-white me-20">
                    <p className="pe-2 text-xl font-bold line-height-2-5">THÔNG TIN</p>
                    <Divider className="my-2 border-white" />
                    <ul>
                        <li className="py-1">
                            <Link className="link-secondary flex items-center" to="/">
                                <IoIosArrowForward className="me-1"/>Trang chủ
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link className="link-secondary flex items-center" to="/about">
                                <IoIosArrowForward className="me-1"/>Giới thiệu
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link className="link-secondary flex items-center" to="/food">
                                <IoIosArrowForward className="me-1"/>Thực đơn
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link className="link-secondary flex items-center" to="/news">
                                <IoIosArrowForward className="me-1"/>Tin tức
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link className="link-secondary flex items-center" to="/contact">
                                <IoIosArrowForward className="me-1"/>Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-3/12 text-white me-20">
                    <p className="pe-2 text-xl font-bold line-height-2-5">LIÊN HỆ</p>
                    <Divider className="my-2 border-white" />
                    <ul>
                        <li className="py-1">
                            <p><b>Địa chỉ:</b> 30 Ngõ 304 Đường Hồ Tùng Mậu, Phú Diễn, Từ Liêm, Hà Nội</p>
                        </li>
                        <li className="py-1">
                            <p><b>Điện thoại:</b> 0987654321</p>
                        </li>
                        <li className="py-1">
                            <p><b>Email:</b> polyfood@gmail.com</p>
                        </li>
                    </ul>
                </div>


                <div className="w-3/12 text-white me-20">
                    <p className="pe-2 text-xl font-bold line-height-2-5">ĐĂNG KÝ NGAY</p>
                    <Divider className="my-2 border-white" />
                    <p>Đăng ký để nhận những thông báo mới nhất từ chúng tôi</p>
                    <Form
                        className="mt-5"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập Email',
                                },
                            ]}
                        >
                            <Input className="w-full" placeholder="Nhập Email"/>
                        </Form.Item>

                        <Form.Item
                        >
                            <Button className="btn-white-outline" htmlType="submit">
                                ĐĂNG KÝ
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <Divider className="mt-20 my-border" />
            <p className="text-white text-center pb-5">© 2023 Thương hiệu và bản quyền thuộc về PolyFood</p>
        </div>
    );
}

export default Footer;