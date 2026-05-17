var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/criar", function (req, res) {
    tentativaController.criar(req, res);
});

module.exports = router;