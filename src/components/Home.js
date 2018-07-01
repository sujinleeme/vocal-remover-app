import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

import Layout from "./Layout"
import AudioFileDropZone from "./AudioFileDropZone"

const Home = () => {
	return (
		<Layout>
			<AudioFileDropZone/>
			<Link to="/dynamic">Navigate to Dynamic Page</Link>
		</Layout>
	)
}

export default Home
