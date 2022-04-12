var express = require('express')
var mysql = require('mysql') // 라이브러리
var mybatismapper = require('mybatis-mapper') // 라이브러리
var dbconfig = require('../db/config.js')

var router = express.Router();
var pool = mysql.createPool(dbconfig); // 서버 부하 제어
//mybatis 모듈 가져와서 mapper정보 받아서 query에 쿼리문 전달
router.use(express.json()) // req.body -> json형식으로 번역

mybatismapper.createMapper(['./mapper/introduceSql.xml']) // node의 main(package.json에서확인)을 기준으로 경로 계산해야함
var format = { language: 'sql', indent: '   '}


router.post('/', (req, res, next) => {
    var params = req.body;
    var query = mybatismapper.getStatement(
    params.mapper, params.mapper_id, params, format
    ); // sql문 추출해서 query에 담기

    pool.getConnection(function(err, connection){
        if(err) console.log("DB접속불가: " +err+" config.js확인") //dbconfig에서 에러
        connection.query(
            query,
            (error, result) => {
                if(error) throw error //쿼리문에서 에러

                if(req.body.crud == "select"){
                    // select문이면 리액트에 결과보냄
                    res.send(result)
                }
                else{
                    // select문이 아니라면 success보냄
                    res.send("success")
                }
            }
        )
        connection.release();
    })
})

module.exports = router