import React from "react"
import Layout from "../components/Layout"
import AudioFileDropZone from "../components/AudioFileDropZone"
import Waveform from '../components/Waveform'

const UploadPage = () => {
	return (
		<div>
			<Layout>
				<AudioFileDropZone />
			</Layout>
			<Waveform
				audioFile="https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
			/>
		</div>
	)
}

export default UploadPage
