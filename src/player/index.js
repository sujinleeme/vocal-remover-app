import React from "react"
import WaveSurfer from "react-wavesurfer"
import { Button, Icon, Paper, withStyles, Typography, Input, Grid } from "@material-ui/core"
import { connect } from "react-redux"
import { setIsPlaying } from "./actions"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  player: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    width: "100%"
    
  },
  playController: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "center",
    backgroundSize: "center",
    width: "250px"
  },
  img: {
    background: "yellow"
  },
  info: {
    alignItems: "center",
    display: "flex",
    justifyContent: "left",
    marginLeft: theme.spacing.unit
  },
  button: {},
  title: {},
  input: {
    margin: theme.spacing.unit
  },
  waveform: {
    marginLeft: theme.spacing.unit
  }
})

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: 0
    }
    this.handlePosChange = this.handlePosChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  
  handleKeyPress(e) {
    console.log(e)
  }
  
  handlePosChange(e) {
    const {isPlaying, setIsPlaying} = this.props
    !isPlaying && setIsPlaying(true)
    this.setState({
      pos: e.originalArgs[0]
    })
  }
  
  render() {
    const {classes, isPlaying, setIsPlaying} = this.props
    const bg = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
    return (
      <Paper className={ classes.root }>
        <div className={ classes.playController }
             style={ {
               backgroundImage: "url(" + bg + ")"
             } }
        >
          <Button
            variant="fab"
            aria-label="PlayContorl"
            color="primary"
            onClick={ () => setIsPlaying(!isPlaying) }
          >
            { isPlaying ?
              <Icon className={ classes.button }>pause</Icon> :
              <Icon className={ classes.button }>play_arrow</Icon> }
          </Button>
        </div>
        <div className={ classes.player }>
          <div className={ classes.info }>
            <div className={ classes.title }>
              <Typography variant="title" gutterBottom>
                Title
              </Typography>
              <Typography variant="subheading" gutterBottom>
                Title
              </Typography>
            </div>
          </div>
          <div className={ classes.waveform }>
            <WaveSurfer
              audioFile={ "https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3" }
              pos={ this.state.pos }
              onPosChange={ this.handlePosChange }
              playing={ isPlaying }
              options={ {
                hideScrollbar: true,
                normalize: true,
                barWidth: 3,
                cursorColor: "gray",
                height: 100,
                fillParent: true,
                progressColor: "blue",
                waveColor: "gray"
              } }
            >
            </WaveSurfer>
          </div>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying
})

export default withStyles(styles)(connect(mapStateToProps, {setIsPlaying})(AudioPlayer))

