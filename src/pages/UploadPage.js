import React from "react"
import Layout from "../components/Layout"
import AudioFileDropZone from "../components/AudioFileDropZone"
import Player from "../player"
import { Paper, withStyles } from "@material-ui/core"

const styles = theme => ({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  }
})

const UploadPage = ({classes}) => {
  return (
    <div>
      <Layout>
        <Paper className={classes.row}>
          <AudioFileDropZone/>
        </Paper>
      </Layout>
      <Layout>
        <Player
          audioFile="https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
        />
      </Layout>
    </div>
  )
}

export default withStyles(styles)(UploadPage)
