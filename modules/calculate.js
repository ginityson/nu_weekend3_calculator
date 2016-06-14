var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  //logic
  if (req.body.type == 'add'){
    var answer = Number(req.body.x) + Number(req.body.y);
    res.send({'answer': answer});
  }
  if (req.body.type == 'subtract'){
    var answer = req.body.x - req.body.y;
    res.send({'answer': answer});
  }
  if (req.body.type == 'multiply'){
    var answer = req.body.x * req.body.y;
    res.send({'answer': answer});
  }
  if (req.body.type == 'divide'){
    var answer = req.body.x / req.body.y;
    res.send({'answer': answer});
  }
   if (req.body.type == 'clear'){
     var answer = ' ';
     res.send({'answer': answer});
   }

  console.log(req.body);
  console.log(res.send);
});
module.exports = router;
