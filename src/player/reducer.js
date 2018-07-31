import * as actionTypes from './constants';

const initialState = {
  volume: 70,
  // isInShuffleMode: false,
  // isInRepeatMode: false,
  // activeTrackId: null,
  isPlaying: false,
  playlist: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_PLAYING:
      return setIsPlaying(state, action.isPlaying);
    case actionTypes.SET_VOLUME:
      return setVolume(state, action.volume);
    case actionTypes.RESET_PLAYLIST:
      return emptyPlaylist(state);
    default:
      return state;
  }
};

const setIsPlaying = (state, isPlaying) => ({ ...state, isPlaying });

const setVolume = (state, volume) => ({ ...state, volume });

export default reducer;
