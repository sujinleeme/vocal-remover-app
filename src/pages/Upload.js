import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import AudioFileDropZone from "../components/AudioFileDropZone"

const Upload = () => {
	return (
		<div>
			<Layout>
				<AudioFileDropZone />
			</Layout>
		</div>
	)
}

export default Upload
