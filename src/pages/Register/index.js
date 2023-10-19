import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import AddAccount from "./AddAccount";
import VerifyFormRegister from "./VerifyFormRegister";
import RegisterForm from "./RegisterForm";

function Index(props) {
    const [passRegister, setPassRegister] = useState(false);
    const [passVerifyRegister, setPassVerifyRegister] = useState(false);
    const [passAddAccount, setPassAddAccount] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate ();

    const handleRegisterSuccess = (email) => {
        setEmail(email);
        setPassRegister(true);
    }

    const handleVerifyRegisterSuccess = () => {
        setPassVerifyRegister(true);
    }

    const handlerAddAccountSuccess = () => {
        setPassAddAccount(true);
    }

    useEffect(() => {
        if (passAddAccount) {
            alert("Đăng ký thành công!");
            navigate(`/login`);
        }
        console.log(passAddAccount);
    }, [passAddAccount, navigate]);
    return (
        <>
            {
                passVerifyRegister
                    ? <AddAccount onAddAccountSuccess={handlerAddAccountSuccess} email={email}/>
                    : (passRegister
                        ? <VerifyFormRegister onVerifyRegisterSuccess={handleVerifyRegisterSuccess} />
                        : <RegisterForm onRegisterSuccess={handleRegisterSuccess}/>)
            }
        </>
    );
}

export default Index;