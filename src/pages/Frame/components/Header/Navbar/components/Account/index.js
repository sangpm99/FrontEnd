import React from 'react';
import {PiUserCircleLight} from "react-icons/pi";
import {Link} from "react-router-dom";
import {Dropdown } from 'antd';

function Account({props}) {
    const decentralization = {
        "admin": [
            {
                key: '1',
                label: (
                    <Link to="/login">Trang quản trị</Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link to="/login">Tài khoản của tôi</Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link to="/login">Lịch sử đơn hàng</Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link to="/login">Đăng xuất</Link>
                ),
            }
        ],
        "employee": [
            {
                key: '1',
                label: (
                    <Link to="/login">Trang quản trị</Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link to="/login">Tài khoản của tôi</Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link to="/login">Lịch sử đơn hàng</Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link to="/login">Đăng xuất</Link>
                ),
            }
        ],
        "user": [
            {
                key: '1',
                label: (
                    <Link to="/login">Tài khoản của tôi</Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link to="/login">Lịch sử đơn hàng</Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link to="/login">Đăng xuất</Link>
                ),
            }
        ],
        "guest": [
            {
                key: '1',
                label: (
                    <Link to="/login">Đăng nhập</Link>
                ),
            }
        ]
    }
    const items = decentralization[props];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow
            >
                <PiUserCircleLight className="text-3xl color-primary cursor-pointer"/>
            </Dropdown>
        </>
    );
}

export default Account;