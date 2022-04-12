import React, { useState, useEffect } from 'react';
import useInterval from './useInterval'


const Fullpage1 = (props) => {

    console.log(props.interview)
    return(
        <div id='page1'>
            <h1>왜 없어졌지 {props.interview[0].wr_q}</h1>
        </div>
    )
}

export default Fullpage1;