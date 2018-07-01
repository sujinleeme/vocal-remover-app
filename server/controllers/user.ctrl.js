const User = require("./../models/User")
const InputAudio = require("./../models/InputAudio")

module.exports = {
	addUser: (req, res, next) => {
		new User(req.body).save((err, newUser) => {
			if (err)
				res.send(err)
			else if (!newUser)
				res.send(400)
			else
				res.send(newUser)
			next()
		})
	},
	
	getUser: (req, res, next) => {
		User.findById(req.params.id).then((err, user) => {
			if (err)
				res.send(err)
			else if (!user)
				res.send(404)
			else
				res.send(user)
			next()
		})
	},
	
	getUserProfile: (req, res, next) => {
		User.findById(req.params.id).then(_user => {
			return InputAudio.find({"author": req.params.id}).then((_audios) =>
				res.json({user: _user, inputAudios: _audios})
			)
		}).catch((err) => console.log(err))
	}
}


