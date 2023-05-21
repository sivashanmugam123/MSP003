var express = require('express');
var router = express.Router();

var db = require('../utils/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {

    const domain_id =  req.query.domain_id;
    const course_id = req.query.course_id;
     const q = "select * from subcourses where domain_id =" + domain_id + " and course_id ='" + course_id +"'" ;
     db.query(q,(err,data)=>{
 if (err) return res.json(err);
 return res.json(data);
     })


  //res.send('respond with a resource');
});

module.exports = router;
