import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import Navbar from "./Navbar";

function Header({props}) {
    const initialNavbarHeight = '10rem'; // tham chiếu GlobalStyle.css : --header-width: 10rem;
    const scrollNavbarHeight = '7rem';

    const [navbarHeight, setNavbarHeight] = useState(initialNavbarHeight);
    const [paddingNavbar, setPaddingNavbar] = useState('4rem');

    useEffect(() => {
        const navbar = document.querySelector(".my-header");
        if (navbar) {
            navbar.style.height = navbarHeight;
            navbar.style.paddingTop = paddingNavbar;
        }
    }, [navbarHeight, paddingNavbar]);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavbarHeight(prevState => scrollNavbarHeight);
            setPaddingNavbar(prevState => '0')
        } else {
            setNavbarHeight(prevState => initialNavbarHeight);
            setPaddingNavbar(prevState => '4rem');
        }
    });
    return (
        <div className="my-header flex flex-wrap items-center py-5 p-body">
            <div className="w-5/12">
                <ul className="flex flex-wrap">
                    <li className="me-5">
                        <Link className="gb-active link-primary" to="/">TRANG CHỦ</Link>
                    </li>
                    <li className="me-5">
                        <Link className="link-primary" to="/about">GIỚI THIỆU</Link>
                    </li>
                    <li className="me-5">
                        <Link className="link-primary" to="/food">THỰC ĐƠN</Link>
                    </li>
                    <li className="me-5">
                        <Link className="link-primary" to="/news">TIN TỨC</Link>
                    </li>
                    <li className="me-5">
                        <Link className="link-primary" to="/contact">LIÊN HỆ</Link>
                    </li>
                </ul>
            </div>
            <div className="w-2/12 flex justify-center">
                <div className="w-1/2">
                    <Link to="/"><div className="w-full gb-bg bg-logo"></div></Link>
                </div>
            </div>
            <div className="w-5/12">
                <Navbar props={props} />
            </div>
        </div>
    );
}

export default Header;