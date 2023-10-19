import React from 'react';
import AdminNavbar from "./AdminNavbar";
import EmployeeNavbar from "./EmployeeNavbar";
import UserNavbar from "./UserNavbar";
import GuestNavbar from "./GuestNavbar";

function Navbar({props}) {
    return (
        <>
            {
                props === 'admin'
                    ? (<AdminNavbar />) : props === 'employee'
                        ? (<EmployeeNavbar />) : props === 'user'
                            ? (<UserNavbar />) : (<GuestNavbar />)
            }
        </>
    );
}

export default Navbar;