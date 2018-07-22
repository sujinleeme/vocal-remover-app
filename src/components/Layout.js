import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	root: {
		paddingTop: theme.spacing.unit * 4,
		paddingBottom: theme.spacing.unit * 4
	}
})

const Layout = ({classes, children}) => {
	return (
		<Grid container>
			<Grid item xs={ 1 } sm={ 2 }></Grid>
			
			<Grid item xs={ 10 } sm={ 8 }>
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="column"
					className={ classes.root }
				>
					{ children }
				</Grid>
			</Grid>
			<Grid item xs={ 1 } sm={ 2 }></Grid>
		</Grid>
	)
}

export default withStyles(styles)(Layout)
