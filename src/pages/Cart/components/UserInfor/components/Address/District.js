import React, {useEffect, useState} from 'react';
import { Select} from "antd";
import axios from "axios";
import Ward from "./Ward";

function District(props) {
    const {host, city, listAddress, setListAddress} = props;
    const [districts, setDistricts] = useState([]);
    const [newDistricts, setNewDistricts] = useState([]);

    const [district, setDistrict] = useState(null);

    useEffect(() => {
        // Gọi API lấy danh sách district
        if(city) {
            axios.get(`${host}p/${city}?depth=2`)
                .then((response) => {
                    setDistricts(response["data"]["districts"]);
                    setDistrict(null);
                });
        }
    }, [city, host]);

    useEffect(() => {
        if (districts) {
            const newList = districts.map(list => {
                return {
                    value: list.code,
                    label: list.name
                }
            })
            setNewDistricts(newList);
        }
        else {
            setNewDistricts(null);
        }
    }, [districts]);

    const handleDistrict = (value) => {
        setDistrict(value);

        const newArr = [...listAddress];
        newArr[1] = value;
        setListAddress(newArr);
    }

    return (
        <>
            <Select
                className="mb-5"
                placeholder="Chọn Quận/Huyện"
                options={newDistricts}
                onChange={handleDistrict}
            />

            <Ward host={host} district={district} listAddress={listAddress} setListAddress={setListAddress}/>
        </>
    );
}

export default District;