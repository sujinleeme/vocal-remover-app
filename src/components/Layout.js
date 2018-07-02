import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import { pullRight, h1 } from "./layout.css"

const Layout = ({children}) => {
	return (
		<div>
			{ children }
		</div>
	)
}

export default Layout
