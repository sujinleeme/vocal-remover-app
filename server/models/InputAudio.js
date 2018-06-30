const mongoose = require('mongoose')

let InputAudioSchema = new mongoose.Schema(
	{
		text: String,
		title: String,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	}
)

InputAudioSchema.methods.getUserRawAudioFile = (_id) => {
	InputAudioSchema.find({'author': _id}).then((audio) => {
		"use strict"
		return audio
	})
}

module.exports = mongoose.model('InputAudio', InputAudioSchema)


