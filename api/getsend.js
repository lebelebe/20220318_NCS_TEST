var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbconfig = require('../db/config.js');
const connection = mysql.createConnection(dbconfig);

router.get('/', (req, res) => {
    res.send('/getsend 요청 응답')
})
router.get('/getjson', (req, res) => {
    res.send({'url':'/getsend/getjson'})
})
router.post('/post', (req, res) => {
    res.send({
        'url':'/getsend/post',
        'title':'getsend.js내의 post라우팅'
    });
})
router.get('/awssql', (req, res) => {
    connection.query(
        'SELECT * FROM interview;',
        (error, rows) => {
            if (error) throw error;
            console.log('해당스키마안의 테이블내용: ', rows);
            res.send(rows);
        }
    )
})

module.exports = router;