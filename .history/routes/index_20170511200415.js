var express = require('express');
var router = express.Router();
var path = require("path");
import html from '../public/index.html';


router.get('/', function (req, res) {
	console.log('SOMETHING HERE: ', __dirname);
	res.sendFile(html);
});

module.exports = router;