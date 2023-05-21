var express = require('express');
var router = express.Router();

var db = require('../utils/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {

    const subcourse_id =  req.query.subcourse_id;
    const course_id = req.query.course_id;
     const q = "select course_name,sub_course_name from courses c , subcourses sc where c.course_id = sc.course_id and c.course_id ='" + course_id +"'" + " and subcourse_id ='" + subcourse_id +"'"  ;
     db.query(q,(err,data)=>{
 if (err) return res.json(err);
 return res.json(data);
     })


  //res.send('respond with a resource');
});

module.exports = router;
