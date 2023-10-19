import React, {useState} from 'react';
import FrameLogin from "../Frame/FrameLogin";
import {Button, Form, Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function LoginForm({onLoginSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [load, setLoad] = useState(false);
    const [statusCode, setStatusCode] = useState(null);

    const apiUrl = "http://localhost:8080/login/login";
    const account = {"userName": username, "password": password};
    const onFinish = async () => {
        setLoad(true);
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(account)
            });
            setStatusCode(response.status);
            setLoad(false);
            if (response.status === 200) {
                console.log("Yêu cầu thành công. Status code:", response.status);
                onLoginSuccess();
            } else {
                console.log("Yêu cầu thất bại. Status code:", response.status);
            }
        }
        catch (error) {
            console.error("error", error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <FrameLogin>
            <p className="text-3xl w-full text-center py-5">ĐĂNG NHẬP</p>
            <Form
                className="w-full"
                name="basic"
                style={{
                    maxWidth: 600,
                }}
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên tài khoản"
                    className="my-input gb-font-size"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Tên tài khoản không được để trống!',
                        },
                    ]}
                >
                    <Input
                        className="w-full"
                        placeholder="Tên tài khoản"
                        prefix={<FontAwesomeIcon className="mr-2" icon={faUser}/>}
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    className="my-input gb-font-size"
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không được để trống!',
                        },
                    ]}
                >
                    <Input.Password
                        className="w-full"
                        placeholder="Mật khẩu"
                        prefix={<FontAwesomeIcon className="mr-2" icon={faLock} />}
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </Form.Item>

                <Form.Item
                >
                    <Button
                        className="w-full bg-btn bg-primary mt-5 py-4 flex justify-center items-center"
                        type="primary"
                        htmlType="submit"
                        loading={load}
                        style={{
                            cursor: load === true ? "not-allowed" : "pointer"
                        }}
                    >
                        ĐĂNG NHẬP
                    </Button>
                </Form.Item>

                <Form.Item
                    className="w-1/2 inline-block"
                >
                    <Link className="gb-font-size" to="/forgotpassword">Quên mật khẩu?</Link>
                </Form.Item>

                <Form.Item
                    className="w-1/2 inline-block"
                >
                    <Link className="float-right gb-font-size" to="/register">Đăng ký?</Link>
                </Form.Item>
                {statusCode !== null && (
                    <p style={{ color: statusCode === 200 ? "green" : "red" }}>
                        {statusCode === 200
                            ? "Gửi thành công"
                            : (statusCode === 400 || statusCode === 404)
                                ? "Tên đăng nhập hoặc mật khẩu không chính xác"
                                : "Gửi thất bại"}
                    </p>
                )}
            </Form>
        </FrameLogin>
    );
}

export default LoginForm;