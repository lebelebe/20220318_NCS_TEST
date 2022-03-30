var express = require('express');
var app = express();
var postsend = require('./api/postsend');
var getsend = require('./api/getsend');
var sqlsend = require('./api/sqlsend');
var preinterview = require('./api/preinterview')


app.get('/', (req, res) => {
    res.send('첫페이지 출력')
})

app.use('/postsend', postsend);
app.use('/getsend', getsend);
app.use('/sqlsend', sqlsend);
app.use('/preinterview', preinterview)


app.listen(8080, () => {
    console.log('서버정상작동')
});