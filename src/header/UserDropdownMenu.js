import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { IconButton, MenuItem, Menu, Avatar } from "@material-ui/core"
import { signupRequest } from "../signup/actions"

import { unsetClient } from "../client/actions"
import AccountCircle from "@material-ui/icons/AccountCircle"

const styles = {
	anchorOrigin: {
		vertical: "top",
		horizontal: "right"
	},
	
	transformOrigin: {
		vertical: -64,
		horizontal: "right"
	}
}

class UserDropdownMenu extends React.Component {
	state = {
		auth: true,
		anchorEl: null
	}
	
	handleMenu = event => {
		this.setState({anchorEl: event.currentTarget})
	}
	
	handleClose = () => {
		this.setState({anchorEl: null})
	}
	
	handleLogout = () => {
		this.props.unsetClient()
	}
	
	render() {
		// console.log(localStorage)
		const {classes, loginRequest, user} = this.props
		const {anchorEl} = this.state
		const open = Boolean(anchorEl)
		// console.log(user)
		
		return (
			<div className={ classes.root }>
				<IconButton
					aria-owns={ open ? "menu-appbar" : null }
					aria-haspopup="true"
					onClick={ this.handleMenu }
					color="inherit"
				>
					<Avatar
						alt={ user.name }
						src={user.picture?
							user.picture.data.url:
							""
						}
					
					
					/>
				
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={ anchorEl }
					anchorOrigin={ styles.anchorOrigin }
					transformOrigin={ styles.transformOrigin }
					open={ open }
					onClose={ this.handleClose }
				>
					<MenuItem
						// remove hover
						onMouseEnter={ (e) => e.target.style.backgroundColor = "transparent" }
						onMouseLeave={ (e) => e.target.style.backgroundColor = "transparent" }
						onClick={ this.handleClose }>{ user.name }</MenuItem>
					<MenuItem onClick={ this.handleClose }>My account</MenuItem>
					<MenuItem onClick={ this.handleLogout }>Log out</MenuItem>
				</Menu>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.client.user,
	errors: state.signup.errors
})

UserDropdownMenu.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapStateToProps, {signupRequest, unsetClient})(UserDropdownMenu))
