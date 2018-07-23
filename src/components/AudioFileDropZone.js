import React from "react"
import Dropzone from "react-dropzone"
import { Paper, withStyles, Typography, Button, Icon } from "@material-ui/core"
import { connect } from "react-redux"

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: theme.spacing.unit * 2,
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
  }
})

class AudioFileDropZone extends React.Component {
  constructor() {
    super()
    this.state = {files: []}
  }
  
  onDrop(files) {
    this.setState({
      files
    })
  }
  
  render() {
    const {classes} = this.props
    return (
      <section className={ classes.root }>
        <Dropzone accept="audio/*"
                  style={ {
                    width: "100%"
                  } }
                  onDrop={ this.onDrop.bind(this) }>
          <div className={ classes.contents }>
            <Typography variant="title"
                        align="center"
                        gutterBottom>Drag & drop an audio file to import, or browse.</Typography>
            <Icon className={ classes.icon }>library_music</Icon>
            <Typography variant="body1"
                        align="center"
                        gutterBottom>
              AIFF, WAVE(WAV),
              FLAC, ALAC, OGG, MP2, MP3, AAC, AMR, and WMA (Max 3MB)
            </Typography>
            <aside>
              <ul>
                {
                  this.state.files.map(f => <li key={ f.name }>{ f.name } - { f.size } bytes</li>)
                }
              </ul>
            </aside>
          </div>
        </Dropzone>
      </section>
    )
  }
}

export default withStyles(styles)(connect(null, {})(AudioFileDropZone))
