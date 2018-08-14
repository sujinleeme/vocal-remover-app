import {
  UPLOAD_RESET, UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_ERROR,
  UPLOAD_PROGRESS
} from './constants';

const initialState = {
  file: null,
  requesting: false,
  successful: false,
  progress: 0,
  messages: [],
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_RESET:
      return {
        file: null,
        requesting: false,
        successful: false,
        progress: 0,
        messages: [],
        errors: []
      };
    case UPLOAD_REQUEST:
      return {
        file: null,
        requesting: true,
        successful: false,
        progress: 0,
        messages: [{ body: 'Uploading...', time: new Date() }],
        errors: []
      };

    case UPLOAD_SUCCESS:
      return {
        file: action.file,
        requesting: false,
        successful: true,
        progress: 100,
        errors: [],
        messages: [{
          body: 'Successfully save file.',
          time: new Date()
        }]
      };

    case UPLOAD_ERROR:
      return {
        file: state.file,
        requesting: false,
        successful: false,
        progress: null,
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date()
        }]),
        messages: []
      };

    case UPLOAD_PROGRESS:
      return {
        file: action.file,
        requesting: false,
        successful: false,
        progress: action.progress,
        errors: [],
        messages: []
      };

    default:
      return state;
  }
};

export default reducer;
