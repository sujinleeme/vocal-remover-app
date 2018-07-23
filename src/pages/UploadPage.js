import React from "react"
import Layout from "../components/Layout"
import AudioFileDropZone from "../components/AudioFileDropZone"
import Player from "../player"
import { connect } from "react-redux"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"
import { withStyles, Paper, Button } from "@material-ui/core"

const styles = theme => ({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit
  }
  
})

class UploadPage extends React.Component {
  componentDidMount() {
    const {user} = this.props
    if (!user) {
      return this.props.modalRequest({modalOpen: true, modalType: SIGN_IN_MODAL})
    }
  }
  
  render() {
    const {user, classes} = this.props
    return (
      <section>
        { user &&
        <div>
          <Layout>
            <Paper className={ classes.row }>
              <AudioFileDropZone/>
            </Paper>
          </Layout>
          <Layout>
            <Player
              audioFile="https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
            />
          </Layout>
          <Layout>
            <Button variant="contained" color="primary" className={ classes.button }>
              make karaoke music
            </Button>
          </Layout>
        </div>
        }
      </section>
    
    )
  }
}

const mapStateToProps = state => ({
  user: state.client.user
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(UploadPage))
