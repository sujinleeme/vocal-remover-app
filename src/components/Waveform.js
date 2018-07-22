import React from "react"
import Wavesurfer from "react-wavesurfer"

class Waveform extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      playing: false,
      pos: 0
    }
    this.handleTogglePlay = this.handleTogglePlay.bind(this)
    this.handlePosChange = this.handlePosChange.bind(this)
  }
  
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    })
  }
  
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0],
      playing: true
    })
  }
  
  render() {
    return (
      <div>
        <Wavesurfer
          audioFile={ "https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3" }
          pos={ this.state.pos }
          onPosChange={ this.handlePosChange }
          playing={ this.state.playing }
        />
      </div>
    )
  }
}

export default Waveform
