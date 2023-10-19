import React, {useState} from 'react';
import FrameLogin from "../Frame/FrameLogin";
import {Button, Form, Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function RegisterForm({onRegisterSuccess}) {
    const [email, setEmail] = useState('');
    const [load, setLoad] = useState(false);
    const [statusCode, setStatusCode] = useState(null)

    const apiUrl = "http://localhost:8080/register/sendmail";
    const params = new URLSearchParams({ email: email });
    const urlWithParams = `${apiUrl}?${params}`;
    const onFinish = async () => {
        setLoad(true);
        try{
            const response = await fetch(urlWithParams, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            setStatusCode(response.status);
            setLoad(false);
            if (response.status === 200) {
                console.log("Yêu cầu thành công. Status code:", response.status);
                onRegisterSuccess(email);
            } else {
                console.log("Yêu cầu thất bại. Status code:", response.status);
            }
        }
        catch (error) {
            console.error("error", error)
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <FrameLogin>
            <p className="text-3xl w-full text-center py-5">ĐĂNG KÝ</p>
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
                    label="Nhập Email"
                    className="my-input"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Email không được để trống!',
                        },
                    ]}
                >
                    <Input
                        className="w-full"
                        placeholder="Email"
                        prefix={<FontAwesomeIcon className="mr-2" icon={faEnvelope} />}
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
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
                        GỬI
                    </Button>
                </Form.Item>

                {statusCode !== null && (
                    <p style={{ color: statusCode === 200 ? "green" : "red" }}>
                        {statusCode === 200
                            ? "Gửi thành công"
                            : (statusCode === 400 || statusCode === 404)
                                ? "Email đã tồn tại"
                                : "Gửi thất bại"}
                    </p>
                )}
            </Form>
        </FrameLogin>
    );
}

export default RegisterForm;