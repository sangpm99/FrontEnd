import React from 'react';
import {Link} from "react-router-dom";
import './TopNav.scss';

function TopNav() {
    return (
        <div className="bg-primary my-top-nav flex items-center justify-center">
            <p className="text-white">
                <b>Giao hàng toàn quốc & nhanh chóng!</b>
                <Link className="px-2 link-secondary" to="#">Đặt hàng ngay</Link>
            </p>
        </div>
    );
}

export default TopNav;