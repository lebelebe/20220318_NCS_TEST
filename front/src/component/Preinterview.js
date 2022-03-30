import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Preinterview = (props) => {
    let[interviewId, interviewIdUpdate] = useState([]);
    const[typeData, insertDB] = useState(0);

    const interviewPublic = async () => {
        await axios.get(
            `/preinterview?type=${props.type}` // node의 preinterview로 요청 전송
        )
        .then( // node에서 데이터를 받았을 때
            (result) => {
               try{
                   interviewIdUpdate([...result.data]);
                   insertDB(result.data[result.data.length - 1].wr_id);
               }
               catch(err){console.log(err.message)}
            }
        )
        .catch( // node에서 데이터를 받지 못했을 때
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
            <h2>{interviewId.length > 0 ? "사전인터뷰" : "데이터전송중"}</h2>
            {
                interviewId.map( (content, i) => {
                    return(
                        <li>
                            <h3>{i+1}. {content.wr_q}</h3><div>{content.wr_a}</div>
                        </li>
                    )
                })
            }
        </div>
    );
}

export default Preinterview;