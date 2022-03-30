var express = require('express')
var mysql = require('mysql')
var mybatismapper = require('mybatis-mapper')
var dbconfig = require('../db/config.js')

var router = express.Router();
var pool = mysql.createPool(dbconfig);
//mybatis 모듈 가져와서 mapper정보 받아서 query에 쿼리문 전달
router.use(express.json())

mybatismapper.createMapper(['./mapper/introduceSql.xml']) // node의 main(package.json에서확인)을 기준으로 경로 계산해야함
var format = { language: 'sql', indent: '   '}


router.get('/', (req, res, next) => {
    var params = req.body;
    var query = mybatismapper.getStatement(
    params.mapper, params.mapper_id, params, format
    );
    pool.getConnection(function(err, connection){
        connection.query(
            query,
            (error, result) => {
                if(error) throw error
                res.send(result)
            }
        )
        connection.release();
    })
})

module.exports = router