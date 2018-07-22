import * as actionTypes from "./constants"

export const setIsPlaying = (isPlaying) => {
  return {
    type: actionTypes.SET_IS_PLAYING,
    isPlaying
  }
}

export const setTrackVolume = (volume) => {
  return {
    type: actionTypes.SET_VOLUME,
    volume
  }
}

export const emptyPlaylist = () => {
  return {
    type: actionTypes.RESET_PLAYLIST
  }
}
