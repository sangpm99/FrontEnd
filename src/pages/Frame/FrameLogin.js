import React from 'react';
import FrameHeader from "./FrameHeader";

function FrameLogin({children}) {
    return (
        <FrameHeader>
            <div className="w-full flex flex-wrap bg-login">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <div className="w-full flex items-center gb-min-h-full">
                        <div className="box flex items-start flex-wrap bg-white p-5 rounded-2xl">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </FrameHeader>
    );
}

export default FrameLogin;