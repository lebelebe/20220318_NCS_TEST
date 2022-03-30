var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("localhost:3000/preinterview 연결")
})
router.post('/write', (req,res) => {
    res.send("localhost:3000/preinterview/write 연결")
})

module.exports = router