import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import axios from "axios";
import AddressDetail from "./AddressDetail";

function Ward(props) {
    const {host, district, listAddress, setListAddress} = props;
    const [wards, setWards] = useState([]);
    const [newWards, setNewWards] = useState([]);

    useEffect(() => {
        // Gọi API lấy danh sách ward
        if(district) {
            axios.get(`${host}d/${district}?depth=2`)
                .then((response) => {
                    setWards(response["data"]["wards"]);
                });
        }
    }, [district, host]);

    useEffect(() => {
        if (wards) {
            const newList = wards.map(list => {
                return {
                    value: list.code,
                    label: list.name
                }
            })
            setNewWards(newList);
        }
    }, [wards]);

    const handleWard = (value) => {
        const newArr = [...listAddress];
        newArr[2] = value;
        setListAddress(newArr);
    }

    return (
        <>
            <Select
                className="mb-5"
                placeholder="Chọn Phường/Xã"
                options={newWards}
                onChange={handleWard}
            />

            <AddressDetail listAddress={listAddress} setListAddress={setListAddress}/>
        </>
    );
}

export default Ward;