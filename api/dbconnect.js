var express = require('express')
var router = express.Router();

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);


var mybatisMapper = require('mybatis-mapper')

mybatisMapper.createMapper(['./mapper/introduceSql.xml'])
var format = { language : 'sql', indent : '  '}


//url 정보 해석
router.use(express.urlencoded({ extended : true }))
router.use(express.json()) // 받아온 파일 json으로 변환


router.post('/',(req, res) => {
    var type = req.query.type; 
    //주소창에 type변수의 값 글쓰기인지, 글읽기인지, 삭제인지, 삽입인지 분리역할
    var params = req.body; 
    //object -> router.use(express.json())
    
   console.log('type : ', type ); //object


   if ( type === 'contactWrite' ) var paramsobj = JSON.parse(params.body); // contactWrite면 json으로 파싱
   else var paramsobj = params.body;

   console.log('req.body.body 즉 요청데이터타입 : ', typeof paramsobj ); //object
   console.log('req.body.body 요청데이터  : ', paramsobj ); //object

    var query = mybatisMapper.getStatement(
        paramsobj.mapper, paramsobj.mapperid, paramsobj, format );
        //sql문 추출해서 query확인하기
        console.log("쿼리문 :", query);
        pool.getConnection(function(err, connection) {

            if(err) throw console.log(" DB접속불가 config.js가 틀림  : " + err);
    
            connection.query(
                query, // 여기는 반드시 sql문이 들어와야 에러가 안남
                (error, result) => {
                    
                    if(error) throw "여기 "+ error + result; // result를 받지 못하는 상황
                   
                    if(paramsobj.crud === 'select'){
                        console.log("crud : select 실행됨", paramsobj.crud)
                        
                        res.send(result); // react한테 res.data를 전송.
                        // sql 전송결과 보냄
                        console.log('타입 : ' , typeof result , ' 전송데이터 : ', result)
                    }else{
                        console.log("crud : select외 실행", paramsobj.crud)
                        res.send("succ"); // react한테 succ라는 문자를 전송.
                    }
                })       
            connection.release(); 
        }) 
           
})

module.exports = router;