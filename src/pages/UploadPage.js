import React from "react"
import Layout from "../components/Layout"
import AudioFileDropZone from "../components/AudioFileDropZone"
import SuccessAudioFileDropZone from "../components/SuccessAudioFileDropZone"
import AudioPlayer from "../player"
import { connect } from "react-redux"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"
import { withStyles, Paper, Button } from "@material-ui/core"
import { uploadReset } from "../upload/actions"

const styles = theme => ({
  root: {
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
    
    //this.props.uploadReset
    const {user} = this.props
    if (!user) {
      return this.props.modalRequest({modalOpen: true, modalType: SIGN_IN_MODAL})
    }
    return this.props.uploadReset()
  }
  
  render() {
    const {user, classes, file} = this.props
    return (
      <section>
        { user &&
        <div>
          <Layout>
            <Paper className={ classes.root }>
              
              
              
                <AudioFileDropZone/>
                
            </Paper>
          
          </Layout>
          { file ?
            
            <Layout>
              <AudioPlayer/>
            </Layout>
            : null }
          
          <Layout>
            { file ?
              <Button variant="contained" color="primary" className={ classes.button }>
                make karaoke music
              </Button> : null }
          </Layout>
        </div>
        }
      </section>
    
    )
  }
}

const mapStateToProps = state => ({
  user: state.client.user,
  file: state.upload.file
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest, uploadReset})(UploadPage))
