var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('첫페이지 출력')
})


app.listen(8080, () => {
    console.log('서버정상작동')
});