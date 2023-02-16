import React from 'react';
import {Header, LineChart} from "../../componets";

const Line = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Header title="Line" category="Chart"/>
            <div className="mx-auto max-w-[880px]">
                <LineChart/>
            </div>
        </div>
    )
}

export default Line;