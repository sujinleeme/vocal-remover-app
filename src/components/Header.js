import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
}

const Header = (props) => {
	const {classes, modalRequest} = props
	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<Link to="/">
						<Typography variant="title" color="inherit" className={ classes.flex }>
							Vocal Remover
						</Typography>
					</Link>
					<Button
						onClick={ () => modalRequest({modalProps: true, modalType: SIGN_IN_MODAL}) }
						color="inherit">Sign in</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
}


export default withStyles(styles)(connect(null, {modalRequest})(Header))

