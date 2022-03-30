var express = require('express');
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')


router.use(express.urlencoded({extended: true})) // 받아온 url 노드에서 사용하도록 인코딩


router.get('/', (req, res, next) =>{
    var sqlside = req.query.type;
    //리액트에서 주소요청

    var query = "";// xml파일로 분리

    if(sqlside == 'aws'){
        //localhost:3000/preinterview?type=aws
        req.body.mapper = "IntroduceSql" //mapper의 namespace로 설정
        req.body.crud = "select" // select, insert, update, delete 중에 하나
        req.body.mapper_id = "interview" //sql문 정보를 담고있는 객체의 id
        router.use('/', awssql)
        next('route')
    }
    else{ // 평범한 라우팅은 이쪽으로 보낸다.
    //localhost: 3000/preinterview
        router.use('/', normalpage)
        next('route')
    }

})

module.exports = router;