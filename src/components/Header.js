import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

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
	},
	avatar: {
		margin: 0
	},
	bigAvatar: {
		width: 60,
		height: 60
	}
}

const Header = (props) => {
	const {classes, modalRequest, user} = props
	console.log(props)
	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<Link to="/">
						<Typography variant="title" color="inherit" className={ classes.flex }>
							Vocal Remover
						</Typography>
					</Link>
					
					{ user ?
						<div>
							<IconButton>
								<Avatar alt={ user.name } src={ user.picture.data.url } className={ classes.avatar }/>
							</IconButton>
							<Menu
								id="menu-appbar"
								// anchorEl={ anchorEl }
								anchorOrigin={ {
									vertical: "top",
									horizontal: "right"
								} }
								transformOrigin={ {
									vertical: "top",
									horizontal: "right"
								} }
								open={true}
							>
								<MenuItem>Profile</MenuItem>
								<MenuItem>Log out</MenuItem>
							</Menu>
						</div>
						:
						<Button
							onClick={ () => modalRequest({modalProps: true, modalType: SIGN_IN_MODAL}) }
							color="inherit">Sign in
						</Button>
					}
				</Toolbar>
			</AppBar>
		</div>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	user: state.auth.user
	// _isUser: state.auth.user,
	// name: state.auth.user.name,
	// picture_url: state.auth.user.picture.data.url
	
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(Header))

