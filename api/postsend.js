var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    res.send('/postsend 요청 응답')
})

module.exports = router;