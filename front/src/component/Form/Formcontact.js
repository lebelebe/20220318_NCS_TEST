import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import $ from 'jquery';


function Formcontact(props){
  
   const [message, setMessage ] = useState(''); //에러출력 변수

   const submitInterview = async (type, e) => { //버튼클릭시 실행

    const  fnValidate = () =>{ 
      if(!$('#agreeTerm').is(':checked')){ 
          setMessage("동의를 체크해주세요");
          return false;
      } 
      if($('#companyname').val() == '' ){
        $('#companyname').focus();
        setMessage("회사명을 입력해주세요.");       
        return false;
      } 
      if($('#phonenumber').val() == '' ){
        $('#phonenumber').focus();
        setMessage("전화번호를 입력해주세요.");       
        return false;
    }                  
      return true;  
    }

    if( fnValidate() ){       
    var jsonstr = decodeURIComponent($("[name='"+type+"']").serialize());
    var Json_data = JSON.stringify(jsonstr).replace(/\&/g, '\",\"')
        Json_data = '{' + Json_data.replace(/=/gi, '\":\"') + '}'


      try{
      axios.post('/api?type='+type,
      //아래의 내용을 post전송한다. req.body객체임
        {         
            headers : {
            "Content-Type": `application/json`
            },
            body : Json_data
          })
          .then( result =>  {  
            //console.log(result); 
            if(result.data == 'succ')  {
              setMessage('노드에 잘 접속되고 전달되었음');
              $('.formStyle [name]').val('');

            } else{
              setMessage('쿼리 혹은 xml 접속문제')
            }

              }
          ).catch(
            (err) => { 
              setMessage('답을 못가져옴 서버어느파일인지 조사해야함 '+err )
            }
          )  
        
        }
      catch(err){
        setMessage('서버연결도 안됨 '+err )

      }
    }
    
  }

  
  useEffect((e)=>{      
    submitInterview(props.dbinfo.type, e)
  }, [message])
    

  return (
    <div className={props.dbinfo.type + " container py-5"}>
      <h3 className='title'>{props.dbinfo.titlenm}</h3>
      <Form action=""  method='post' name={props.dbinfo.type}>       
        <FormGroup>
          <input type='hidden' name='crud' value={props.dbinfo.crud} />
          <input type='hidden' name='mapper' value={props.dbinfo.mapper} />
          <input type='hidden' name='mapperid' value={props.dbinfo.mapperid} />
        </FormGroup>
        <div className='formStyle'>
          <FormGroup>
            <Label for="companyname">회사이름</Label>
            <Input type="text" name='companyname' id="companyname" />
          </FormGroup>
          <FormGroup tag="ul">
            <FormGroup tag="li">
              <Input name="position" type="radio" value="p"/>
              {' '}
              <Label check>
                퍼블리셔
              </Label>
            </FormGroup>
            <FormGroup check tag="li">
              <Input name="position" type="radio" value="t"/>
              {' '}
              <Label>
                기획
              </Label>
            </FormGroup>
            <FormGroup check tag="li">
              <Input name="position" type="radio" value="d"/>
              {' '}
              <Label check>
                디자이너
              </Label>
            </FormGroup>
            <FormGroup check tag="li">
              <Input name="position" type="radio" value="m"/>
              {' '}
              <Label check>
                마케팅
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup tag="ul">
            <FormGroup tag="li">
              <Label for="ability[0]">html/css</Label>
              <Input type="text" name='ability' id="ability1" />
            </FormGroup>
            <FormGroup tag="li">
              <Label for="ability[1]">js/jquery</Label>
              <Input type="text" name='ability' id="ability2" />
            </FormGroup>
            <FormGroup tag="li">
              <Label for="ability[2]">React</Label>
              <Input type="text" name='ability' id="ability3" />
            </FormGroup>
            <FormGroup tag="li">
              <Label for="ability[3]">node.js/sql</Label>
              <Input type="text" name='ability' id="ability4" />
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="phonenumber">전화번호</Label>
            <Input type="text" name='phonenumber' id="phonenumber" />
          </FormGroup>
          <FormGroup>
            <Label for="othertext">기타내용</Label>
            <Input type="textarea" name="othertext" id="othertext" />
          </FormGroup>       
        </div>
        <FormGroup check className="agree">
          <Label check>
            <Input type="checkbox" id="agreeTerm" />{' '}
            <span>개인정보정책동의</span>
          </Label>
        </FormGroup>
        <Button onClick={e => { submitInterview(props.dbinfo.type, e) }}>글쓰기</Button>
      </Form>
      
      <p>{ message  }</p>
    </div>
  )

}

export default Formcontact