const inputAudioController = require("./../controller/inputAudio.ctrl")
const multipart = require("connect-multiparty")
const multipartWare = multipart()

module.exports = (router) => {
	/**
	 * get all inputAudios
	 */
	
	router
		.route("/input-audios")
		.get(inputAudioController.getAll)
	
	/**
	 * add an input audio
	 */
	router
		.route("/input-audio")
		.post(multipartWare, inputAudioController.addInputAudio)
	
	/**
	 * get a particlular input Audio to view
	 */
	router
		.route("/input-audio/:id")
		.get(inputAudioController.getInputAudio)
}
