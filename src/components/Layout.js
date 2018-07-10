import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import Grid from "@material-ui/core/Grid"
import { pullRight, h1 } from "./layout.css"

const Layout = ({children}) => {
	return (
		<Grid container>
			<Grid item xs={ 1 } sm={ 2 }></Grid>
			
			<Grid item xs={ 10 } sm={ 8 }>
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="row">
					{ children }
				</Grid>
			</Grid>
			<Grid item xs={ 1 } sm={ 2 }></Grid>
		
		</Grid>
	)
}

export default Layout
