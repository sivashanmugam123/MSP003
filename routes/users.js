var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const q = "select * from domains";
  db.query(q,(err,data)=>{
if (err) return res.json(err);
return res.json(data);
  })
});

module.exports = router;
