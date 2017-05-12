var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/', function (req, res) {
	console.log('SOMETHING HERE: ', __dirname);
	res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;
