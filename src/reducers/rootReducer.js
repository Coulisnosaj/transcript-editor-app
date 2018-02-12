import { combineReducers } from 'redux';
import { LOAD_VIDEO, LOAD_TRANSCRIPT } from '../actions';

const video = (state = null, action) => {
  switch (action.type) {
    case LOAD_VIDEO:
      return action.video;
    default:
      return state;
  }
};

const transcript = (state = null, action) => {
  switch (action.type) {
    case LOAD_TRANSCRIPT:
      return action.transcript;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  video,
  transcript,
});

export default rootReducer;
