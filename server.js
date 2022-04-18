var express = require('express');
var app = express();
var preinterview = require('./api/preinterview');
var connect = require('./api/dbconnect');

app.get('/', (req, res) => {
    res.send('첫페이지 출력')
})

app.use('/preinterview', preinterview);
app.use('/api', connect);


app.listen(8080, () => {
    console.log('서버정상작동')
});