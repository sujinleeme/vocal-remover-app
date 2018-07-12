import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { IconButton, MenuItem, Menu, Avatar } from "@material-ui/core"

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
	
	render() {
		const {classes, name = "", src = ""} = this.props
		const {anchorEl} = this.state
		const open = Boolean(anchorEl)
		
		return (
			<div className={ classes.root }>
				<IconButton
					aria-owns={ open ? "menu-appbar" : null }
					aria-haspopup="true"
					onClick={ this.handleMenu }
					color="inherit"
				>
					<Avatar alt={ name } src={ src }/>
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
						onClick={ this.handleClose }>{ name }</MenuItem>
					<MenuItem onClick={ this.handleClose }>My account</MenuItem>
					<MenuItem onClick={ this.handleClose }>Log out</MenuItem>
				</Menu>
			</div>
		)
	}
}

UserDropdownMenu.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserDropdownMenu)
