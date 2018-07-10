import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	menu: {
		width: 200
	}
})

const currencies = [
	{
		value: "USD",
		label: "$"
	},
	{
		value: "EUR",
		label: "€"
	},
	{
		value: "BTC",
		label: "฿"
	},
	{
		value: "JPY",
		label: "¥"
	}
]

class Signup extends React.Component {
	state = {
		open: false,
		name: "Cat in the Hat",
		age: "",
		multiline: "Controlled",
		currency: "EUR"
	}
	
	handleOpen = () => {
		this.setState({open: true})
	}
	
	handleClose = () => {
		this.setState({open: false})
	}
	
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}
	
	render() {
		const {classes} = this.props
		
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"

			>
				<form className={ classes.container } noValidate autoComplete="on">
					<TextField
						id="textarea"
						label="With placeholder multiline"
						placeholder="Placeholder"
						multiline
						className={ classes.textField }
						margin="normal"
					/>
					<TextField
						required
						id="required"
						label="Required"
						defaultValue="Hello World"
						className={ classes.textField }
						margin="normal"
					/>
					<TextField
						id="textarea"
						label="With placeholder multiline"
						placeholder="Placeholder"
						multiline
						className={ classes.textField }
						margin="normal"
					/>
				</form>
			</Modal>
		)
	}
}
/*

TextFields.propTypes = {
	classes: PropTypes.object.isRequired
}
*/



export default withStyles(styles)(Signup)
