import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import UserProfile from './MyPage/UserProfile';
import { modalRequest } from '../modal/actions';
import { SIGN_IN_MODAL } from '../modal/constants';

class MyPage extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      return this.props.modalRequest({ modalOpen: true, modalType: SIGN_IN_MODAL });
    }
  }

  render() {
    const { user } = this.props;
    return (
      <Layout>
        { user && <UserProfile user={user} />}
      </Layout>
    );
  }
}


const mapStateToProps = state => ({
  user: state.client.user
});

export default connect(mapStateToProps, { modalRequest })(MyPage);
