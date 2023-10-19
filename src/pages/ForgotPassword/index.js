import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import ChangePassword from "./ChangePassword";
import VerifyFormForgotPassword from "./VerifyFormForgotPassword";
import ForgotPasswordForm from "./ForgotPasswordForm";

function Index() {
    const [passForgotPassword, setPassForgotPassword] = useState(false);
    const [passVerifyForgotPassword, setPassVerifyForgotPassword] = useState(false);
    const [passChangePassword, setPassChangePassword] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate ();

    const handleForgotPasswordSuccess = (email) => {
        setEmail(email);
        setPassForgotPassword(true);
    }

    const handleVerifyForgotPasswordSuccess = () => {
        setPassVerifyForgotPassword(true);
    }

    const handlerChangePasswordSuccess = () => {
        setPassChangePassword(true);
    }

    useEffect(() => {
        if (passChangePassword) {
            alert("Đổi mật khẩu thành công thành công!");
            navigate(`/login`);
        }
        console.log(passChangePassword);
    }, [passChangePassword, navigate]);
    return (
        <>
            {
                passVerifyForgotPassword
                    ? <ChangePassword onChangePasswordSuccess={handlerChangePasswordSuccess} email={email}/>
                    : (passForgotPassword
                        ? <VerifyFormForgotPassword onVerifyForgotPasswordSuccess={handleVerifyForgotPasswordSuccess} />
                        : <ForgotPasswordForm onForgotPasswordSuccess={handleForgotPasswordSuccess}/>)
            }
        </>
    );
}

export default Index;