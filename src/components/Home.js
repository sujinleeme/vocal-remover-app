import React from "react"
import { Link } from "react-router-dom"
import Layout from "./Layout"
import AudioFileDropZone from "./AudioFileDropZone"

const Home = () => {
	return (
		<div>
			<Layout>
				<AudioFileDropZone/>
			</Layout>
		</div>
	)
}

export default Home
