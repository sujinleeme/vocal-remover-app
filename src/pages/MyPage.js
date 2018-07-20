import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import UserProfile from "./MyPage/UserProfile"
import { connect } from "react-redux"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"

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


class MyPage extends React.Component {
	componentDidMount () {
    const { user } = this.props
		if (!user) {
    	return this.props.modalRequest({modalOpen: true, modalType: SIGN_IN_MODAL})
		}
	}
	
  render() {
  	const { user } = this.props
    return (
			<div>
				<Layout>
          { user &&	<UserProfile user={user}/>}
				</Layout>
			</div>
    );
  }
}


const mapStateToProps = state => ({
	user: state.client.user
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(MyPage))
