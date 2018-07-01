import React from "react"
import { Link } from "react-router-dom"

import { pullRight, h1 } from "./layout.css"

const Layout = ({children}) => {
	return (
		<div>
			<Link to="/">
				<h1>
					DEMO
				</h1>
			</Link>
			{ children }
		</div>
	)
}

export default Layout
