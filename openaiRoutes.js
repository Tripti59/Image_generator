const express= require ('express');
const router=express.Router();
//Be cautious about while using . or .. 
//. means the file is in the same level folder
//.. means going one level up and getting in the folder and file
const {generateImage} = require('../controllers/openaiController');
router.post('/generateImage',generateImage);

 // binds together an HTTP method (such as GET, POST, PUT, DELETE) and an endpoint (URL pattern). It specifies how the server should respond to requests made to that particular combination of HTTP method and URL.
module.exports=router;