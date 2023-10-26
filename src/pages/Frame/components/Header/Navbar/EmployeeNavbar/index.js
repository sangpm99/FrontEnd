import SearchBox from "../components/SearchBox";
import React from 'react';
import Account from "../components/Account";
import CartIcon from "../components/CartIcon";
import {Route, Routes} from "react-router-dom";
import Login from "../../../../../Login";

function EmployeeNavbar() {
    return (
        <>
            <ul className="flex justify-end items-center">
                <li className="mx-2">
                    <SearchBox />
                </li>
                <li className="mx-2">
                    <Account props="employee"/>
                </li>
                <li className="mx-2">
                    <CartIcon />
                </li>
            </ul>
            <Routes>
                <Route to="/login" element={<Login />}/>
            </Routes>
        </>
    );
}

export default EmployeeNavbar;