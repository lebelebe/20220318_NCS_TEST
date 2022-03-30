import React, {Component} from 'react';
import axios from 'axios';

class Classcomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            mytext : '아직 디비 안온듯',
            mytextjson : ''
        }
    }
    componentDidMount = async () =>{
        const gettext = await axios.get('/getsend')
        this.setState({mytext: gettext.data})
        const getjson = await axios.get('/getsend/getjson')
        this.setState({mytextjson: getjson.data.url})
    }

    render(){
        return(
            <div>
                <h3>클래스형 컴포넌트</h3>
                <p>componentDidMount 함수에 의해 해당컴포넌트가 새로고침 됨</p>
                <p>data가 그저 텍스트임 {this.state.mytext}</p>
                <p>json 포맷으로 왔기 때문에 key까지 들어가야지 값을 얻는다. : {this.state.mytextjson}</p>
            </div>
        )
    }
}

export default Classcomponent;