import React from "react"
import { connect } from "react-redux"
import Dropzone from "react-dropzone"
import { withStyles, Typography, Icon } from "@material-ui/core"
import { uploadRequest } from "../upload/actions"

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    cursor: "pointer"
  },
  contents: {
    padding: theme.spacing.unit * 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  icon: {
    fontSize: "80px",
    color: "#ccc",
    margin: theme.spacing.unit * 4
  },
  activeStyle: {
    background: "gray"
  },
  iconBox: {
    border: "2px solid #ccc",
    borderStyle: "dashed",
    width: "100%",
    borderRadius: "10px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    margin: theme.spacing.unit * 2
    
  },
  acceptStyle: {}
})

const AudioFileDropZone = ({classes, uploadRequest, upload}) => {
  
  console.log(upload)
  return (
    <Dropzone
      className={ classes.root }
      accept="audio/*"
      acceptStyle={ {
        background: "#eee"
      } }
      onDrop={ (file) => uploadRequest({file}) }>
      <div className={ classes.contents }>
        <Typography variant="title"
                    align="center"
                    gutterBottom>Drag & drop an audio file to import, or browse.</Typography>
        <div className={ classes.iconBox }>
          <Icon className={ classes.icon }>library_music</Icon>
        </div>
        <Typography variant="body1"
                    align="center"
                    gutterBottom>
          AIFF, WAVE(WAV),
          FLAC, ALAC, OGG, MP2, MP3, AAC, AMR, and WMA (Max 3MB)
        </Typography>
        <aside>
          <ul>
            { /*{*/ }
            { /*this.state.files.map(f => <li key={ f.name }>{ f.name } - { f.size } bytes</li>)*/ }
            { /*}*/ }
          </ul>
        </aside>
      </div>
    </Dropzone>
  )
}

const mapStateToProps = state => ({
  upload: state.upload
})

export default withStyles(styles)(connect(mapStateToProps, {uploadRequest})(AudioFileDropZone))
