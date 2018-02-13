import { combineReducers } from 'redux';
import {
  LOAD_VIDEO,
  LOAD_TRANSCRIPT,
  PLAY_VIDEO,
  PAUSE_VIDEO,
  TOGGLE_VIDEO,
  VIDEO_TIMEUPDATE,
  SEEK_VIDEO_ABSOLUTE,
  SEEK_VIDEO_RELATIVE,
} from '../actions';

const video = (state = {
  src: null, playing: false, time: 0, seeked: false,
}, action) => {
  switch (action.type) {
    case LOAD_VIDEO:
      return { src: action.video, playing: false, time: 0 };
    case PLAY_VIDEO:
      return { ...state, playing: true };
    case PAUSE_VIDEO:
      return { ...state, playing: false };
    case TOGGLE_VIDEO:
      return { ...state, playing: !state.playing };
    case VIDEO_TIMEUPDATE:
      return { ...state, time: action.time, seeked: false };
    case SEEK_VIDEO_ABSOLUTE:
      return { ...state, time: action.time, seeked: true };
    case SEEK_VIDEO_RELATIVE:
      return { ...state, time: state.time + action.time, seeked: true };
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
