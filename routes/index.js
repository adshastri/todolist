var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Note = mongoose.model('Note');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { title: 'Express' });
});

router.get('/getNotes', function(req, res, next) {
	Note.find(function(err, posts) {
		if (err){return next(err);}
		res.json(posts);
	});
});

router.post('/addNote', function(req, res, next) {
	var note = new Note(req.body);
	note.save(function(err, note){
		if (err){return next(err);}
		res.json(note);
	});
});

router.put('/deleteNote', function(req, res, next) {
	Note.remove({title:req.body.title}, function(err){
		if (err){
			return next(err);
		}
	});
	res.send("success");
});

module.exports = router;