import React from "react"
import Layout from "../components/Layout"
import UserProfile from "./MyPage/UserProfile"
import { connect } from "react-redux"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"

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

export default connect(mapStateToProps, {modalRequest})(MyPage)
