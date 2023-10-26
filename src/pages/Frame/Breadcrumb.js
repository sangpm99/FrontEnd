import React from 'react';

function Bread({children}) {
    return (
        <div
            className="w-full relative mb-10"
        >
            <img
                style={{
                    width: "100%",
                    height: "20vh",
                    objectFit: "cover"
                }}
                src={require("../../imgs/Breadcrumb.png")}
                alt=""
            />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5'
                }}
            >
                <span className="text-5xl text-white dancing-style">{children}</span>
            </div>
        </div>
    );
}

export default Bread;