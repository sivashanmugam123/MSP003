var express = require('express');
var router = express.Router();

var db = require('../utils/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {

    const q = "select * from domains";
    db.query(q,(err,data)=>{
if (err) return res.json(err);
return res.send(data);
    })


  //res.send('respond with a resource');
});

module.exports = router;
