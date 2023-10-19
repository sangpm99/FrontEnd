import React from 'react';
import {Button} from "antd";
import './Banner.scss';

function Banner() {
    return (
        <div className="my-banner">
            <div className="bg-banner gb-bg w-full flex flex-wrap items-center">
                <div className="w-full intro">
                    <p className="color-text text-3xl">Cửa hàng đồ ăn chay hàng đầu</p>
                    <p
                        className="font-bold my-title heading-style">
                        <span className="color-secondary pe-2 heading-style">Poly</span>
                        <span className="color-primary heading-style">Food</span>
                    </p>
                    <p className="color-text text-2xl">Giảm giá lên tới <span className="font-bold italic text-black">50%</span></p>
                    <Button
                        className="bg-primary text-white secondary-hover border-0 py-2 px-5 mt-5 round color-white-hover font-bold"
                        size="large"
                    >
                        ĐẶT HÀNG NGAY
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Banner;