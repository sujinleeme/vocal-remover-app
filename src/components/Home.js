import React from "react"
import { Link } from "react-router-dom"
import Layout from "./Layout"
import AudioFileDropZone from "./AudioFileDropZone"

const Home = () => {
	return (
		<Layout>
			<AudioFileDropZone/>
		</Layout>
	)
}

export default Home
