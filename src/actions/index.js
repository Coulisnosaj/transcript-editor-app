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
