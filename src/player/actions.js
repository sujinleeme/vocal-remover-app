import * as actionTypes from './constants';

export const setIsPlaying = isPlaying => ({
  type: actionTypes.SET_IS_PLAYING,
  isPlaying
});

export const setTrackVolume = volume => ({
  type: actionTypes.SET_VOLUME,
  volume
});

export const emptyPlaylist = () => ({
  type: actionTypes.RESET_PLAYLIST
});
