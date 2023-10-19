import React from 'react';
import SearchBox from "../components/SearchBox";
import Account from "../components/Account";
import Cart from "../components/Cart";
import {Route, Routes} from "react-router-dom";
import Login from "../../../../../Login";

function AdminNavbar() {
    return (
        <>
            <ul className="flex justify-end items-center">
                <li className="mx-2">
                    <SearchBox />
                </li>
                <li className="mx-2">
                    <Account props="admin"/>
                </li>
                <li className="mx-2">
                    <Cart />
                </li>
            </ul>
            <Routes>
                <Route to="/login" element={<Login />}/>
            </Routes>
        </>
    );
}

export default AdminNavbar;