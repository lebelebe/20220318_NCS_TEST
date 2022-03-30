import axios from 'axios';
import React, {useEffect, useState} from 'react';

function Functioncomponent(){
    const[mytext, mytextUpdate ] = useState('아직 db안옴')
    useEffect( async () => {
        await axios.post('/getsend/post',{})
        .then( res => {
            mytextUpdate(res.data.title)
            }
        )

        
    }, [])

    return(
        <div>
            <h3>함수형 컴포넌트</h3>
            <p>post는 axios.post로 응답받아야해: {mytext}</p>
        </div>
    )
}

export default Functioncomponent;