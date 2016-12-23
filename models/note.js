var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	title: String,
	content: String
});

mongoose.model('Note', NoteSchema);