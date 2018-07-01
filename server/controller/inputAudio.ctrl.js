const InputAudio = require("./../models/InputAudio")
const User = require("./../models/User")
const fs = require("fs")

module.exports = {
	addInputAudio: (req, res, next) => {
		let {text} = req.body
		// check audio files
		// if files.audio
		//    upload
		// else
		saveInputAudio({title})
		
		const saveInputAudio = (obj) => {
			new InputAudio(obj).save((err, audio) => {
				if (err)
					res.send(err)
				else if (!audio)
					res.send(400)
				else {
					return InputAudio.addAuthor(req.body.author_id).then(_audio =>
						res.send(_audio)
					)
				}
				next()
			})
		}
	},
	
	getAll: (req, res, next) => {
		InputAudio.find(req.params.id)
			.populate("author")
	},
	
	/**
	 * audio_id
	 */
	getInputAudio: (req, res, next) => {
		InputAudio.findById(req.params.id)
			.populate("author")
	}
}
