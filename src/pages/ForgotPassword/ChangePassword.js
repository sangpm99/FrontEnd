import React, {useState} from 'react';
import FrameLogin from "../Frame/FrameLogin";
import {Button, Form, Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

function ChangePassword(props) {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [load, setLoad] = useState(false);
    const [statusCode, setStatusCode] = useState(null);

    const apiUrl = "http://localhost:8080/forgotpassword/setpassword";
    const account = {"email": props.email, "password": password, "rePassword": rePassword};
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
                props.onChangePasswordSuccess();
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
            <p className="text-3xl w-full text-center py-5">ĐỔI MẬT KHẨU</p>
            <Form
                className="w-full"
                name="basic"
                style={{
                    maxWidth: 600,
                }}
                layout="vertical"
                initialValues={{
                    remember: true,
                    email: props.email
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    className="my-input"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Email không được để trống!',
                        },
                    ]}
                >
                    <Input
                        className="w-full"
                        placeholder="Tên tài khoản"
                        prefix={<FontAwesomeIcon className="mr-2" icon={faUser}/>}
                        disabled={true}
                    />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
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
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={[
                        {
                            required: true,
                            message: 'Nhập lại mật khẩu không được để trống!',
                        },
                    ]}
                >
                    <Input.Password
                        className="w-full"
                        placeholder="Nhập lại mật khẩu"
                        prefix={<FontAwesomeIcon className="mr-2" icon={faLock} />}
                        value={rePassword}
                        onChange={(e) => {setRePassword(e.target.value)}}
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
                        ĐỔI MẬT KHẨU
                    </Button>
                </Form.Item>

                {statusCode !== null && (
                    <p style={{ color: statusCode === 200 ? "green" : "red" }}>
                        {statusCode === 200
                            ? "Đổi thành công"
                            : (statusCode === 400 || statusCode === 404)
                                ? "Mật khẩu và nhập lại mật khẩu không trùng khớp"
                                : "Gửi thất bại"}
                    </p>
                )}
            </Form>
        </FrameLogin>
    );
}

export default ChangePassword;