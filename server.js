var express = require('express');
var app = express();
var postsend = require('./routes/postsend');
var getsend = require('./routes/getsend');
var sqlsend = require('./routes/sqlsend');


app.get('/', (req, res) => {
    res.send('첫페이지 출력')
})

app.use('/postsend', postsend);
app.use('/getsend', getsend);
app.use('/sqlsend', sqlsend);


app.listen(8080, () => {
    console.log('서버정상작동')
});