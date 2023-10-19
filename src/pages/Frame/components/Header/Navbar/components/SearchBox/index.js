import React from 'react';
import Search from "antd/es/input/Search";
import './SearchBox.scss';
function SearchBox() {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <Search
            className="my-search"
            placeholder="Tìm kiếm"
            onSearch={onSearch}
            style={{
                width: "15rem",
            }}
        />
    );
}

export default SearchBox;