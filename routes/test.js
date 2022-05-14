const express = require("express");
const router = express.Router();
router.get("/test",(req,res,next)=>{
    res.json("Hello this is a test route")
})
module.exports = router;