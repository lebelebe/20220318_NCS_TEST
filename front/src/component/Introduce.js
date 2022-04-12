import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Fullpage1 from './Fullpage1';


const Introduce = (props) => {
    // 함수형 컴포넌트에서는 this 주의할 것
    let[interviewId, interviewIdUpdate] = useState([]);
    const[typeData, insertDB] = useState(0);
    const titletext = props.titlenm;

    const interviewPublic = async () => {
        axios({
            url: `/preinterview?type=${props.type}`,
            method: "POST",
        })
        .then(
            (result) => {

                // select전용
               try{
                   interviewIdUpdate([...result.data]);
                   insertDB(result.data[result.data.length - 1].wr_id);
               }
               catch(err){console.log("result 타입 확인할 것"+err.message+"/"+typeof result)}


            }
        )
        .catch(
            (e) => {
                console.log(e+'이유로 통신이 불안정함')
            }
        )
    }
    useEffect(
        () => {
            interviewPublic();
        }, [typeData]
    )

    return(
        <div>
            <Fullpage1 interview={interviewId}></Fullpage1>
        </div>
    );
}
export default Introduce;
