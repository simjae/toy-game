const express = require("express");
const router = express.Router();



router.get("/", (req,res) =>{
    res.render('index', {
        title: "MY HOMEPAGE",
        length: 5
    });
});


module.exports = router;