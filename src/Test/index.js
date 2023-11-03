import React from 'react';
function Test() {
    return (
        <div style={{borderWidth: '1rem 1px', borderColor: '#4E7E38', padding: '0.5rem', overflow: 'hidden', width: '100%', margin: '20%'}}>
            <div style={{display: 'flex'}}>
                <div style={{width: '85%'}}>
                    <p style={{fontSize: '200%', fontWeight: 'bold'}}>Xác Nhận Đơn Hàng Tại PolyFood</p>
                </div>
                <div style={{width: '15%'}}>
                    <img src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1692137209/e2nw6oqvtlvpqmdwtmnh.png' alt='logo'/>
                </div>
            </div>
            <div style={{display: 'flex', marginTop: '2rem', padding: '1rem 0', borderBottom: '1px solid #ccc'}}>
                <div style={{width: '50%'}}>
                    <p><b>Từ: </b>PolyFood</p>
                    <p><b>Email: </b>polyfood@gmail.com</p>
                    <p><b>Điện thoại: </b>0987654321</p>
                    <p><b>Địa chỉ: </b>30 Ngõ 304 Đường Hồ Tùng Mậu, Phú Diễn, Từ Liêm, Hà Nội</p>
                </div>
                <div style={{width: '50%'}}>
                    <p><b>Đến: </b>Customer Name</p>
                    <p><b>Email: </b>phamsang050599@gmail.com</p>
                    <p><b>Điện thoại: </b>0987654321</p>
                    <p><b>Địa chỉ: </b>30 Ngõ 304 Đường Hồ Tùng Mậu, Phú Diễn, Từ Liêm, Hà Nội</p>
                </div>
            </div>
            <div style={{padding: '1rem 0'}}>
                <p><b>Số hóa đơn: </b>poly_53123123</p>
                <p><b>Ngày đặt: </b>01/11/2023</p>
                <p><b>Hình thức thanh toán: </b>Thanh toán trực tiếp</p>
            </div>
            <div>
                <table style={{width: '100%', border: '1px solid #4E7E38',padding: '1rem', borderCollapse: 'collapse', textAlign: 'center'}}>
                    <thead style={{color: '#fff', backgroundColor: '#4E7E38'}}>
                        <th style={{border: '1px solid #4E7E38',padding: '1rem'}}>STT</th>
                        <th style={{border: '1px solid #4E7E38',padding: '1rem'}}>Tên món</th>
                        <th style={{border: '1px solid #4E7E38',padding: '1rem'}}>Giá tiền</th>
                        <th style={{border: '1px solid #4E7E38',padding: '1rem'}}>Số lượng</th>
                        <th style={{border: '1px solid #4E7E38',padding: '1rem'}}>Tổng cộng</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>1</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>Nguyễn Văn A</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>1999</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>1</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>Nguyễn Văn A</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>2</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>Phạm Thị B</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>2000</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>2</td>
                        <td style={{border: '1px solid #4E7E38',padding: '1rem'}}>Phạm Thị B</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Test;