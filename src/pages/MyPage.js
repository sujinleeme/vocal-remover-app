import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import UserProfile from "./MyPage/UserProfile"
import { connect } from "react-redux"

const styles = {
	row: {
		display: "flex",
		justifyContent: "center"
	},
	avatar: {
		margin: 10
	},
	bigAvatar: {
		width: 60,
		height: 60
	}
}


const MyPage = ({user}) => {
	return (
		<div>
			<Layout>
				<UserProfile
					user={user}
				/>
			</Layout>
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.client.user
})

export default withStyles(styles)(connect(mapStateToProps, null)(MyPage))
