export const LOAD_VIDEO = 'LOAD_VIDEO';
export const loadVideo = video => ({
  type: LOAD_VIDEO,
  video,
});

export const LOAD_TRANSCRIPT = 'LOAD_TRANSCRIPT';
export const loadTranscript = transcript => ({
  type: LOAD_TRANSCRIPT,
  transcript,
});

export const PLAY_VIDEO = 'PLAY_VIDEO';
export const playVideo = () => ({
  type: PLAY_VIDEO,
});

export const PAUSE_VIDEO = 'PAUSE_VIDEO';
export const pauseVideo = () => ({
  type: PAUSE_VIDEO,
});

export const TOGGLE_VIDEO = 'TOGGLE_VIDEO';
export const toggleVideo = () => ({
  type: TOGGLE_VIDEO,
});

export const VIDEO_TIMEUPDATE = 'VIDEO_TIMEUPDATE';
export const videoTimeupdate = time => ({
  type: VIDEO_TIMEUPDATE,
  time,
});

export const SEEK_VIDEO_ABSOLUTE = 'SEEK_VIDEO_ABSOLUTE';
export const seekVideoAbsolute = time => ({
  type: SEEK_VIDEO_ABSOLUTE,
  time,
});

export const SEEK_VIDEO_RELATIVE = 'SEEK_VIDEO_RELATIVE';
export const seekVideoRelative = time => ({
  type: SEEK_VIDEO_RELATIVE,
  time,
});
