const mongoose = require('mongoose')

let OutputAudioSchema = new mongoose.Schema(
	{
		text: String,
		title: String,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	}
)

OutputAudioSchema.methods.addAuthor = (author_id) => {
	this.author = author_id
	return this.save()
}

OutputAudioSchema.methods.getUserInputAudio = (_id) => {
	OutputAudioSchema.find({'author': _id}).then((audio) => {
		"use strict"
		return audio
	})
}

module.exports = mongoose.model('OutputAudio', OutputAudioSchema)


