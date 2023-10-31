import React from 'react';
import FrameDefault from "../../Frame/FrameDefault";
import Bread from "../../Frame/Breadcrumb";
import {Button, Result} from "antd";

function PaymentSuccess() {
    return (
        <FrameDefault>
            <Bread>Đặt Hàng Thành Công</Bread>
            <Result
                className="color-primary"
                icon={
                    <div className="flex justify-center">
                        <img width="200px" src={require("../../../imgs/food-success.png")} alt="success"/>
                    </div>
                }
                title="Đặt hàng thành công!"
                subTitle="Thông tin đơn hàng sẽ được chuyển đến mail của quý khách trong ít phút nữa, cảm ơn vì đã mua hàng !"
                extra={[
                    <Button href="/" className="btn-primary">Trang Chủ</Button>,
                ]}
            />
        </FrameDefault>
    );
}

export default PaymentSuccess;