import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoColumnPlayer from './VideoColumnPlayer';
import VideoColumnUpload from './VideoColumnUpload';

const VideoColumn = ({ video }) => {
  if (video.src) {
    return <VideoColumnPlayer />;
  }
  return <VideoColumnUpload />;
};

VideoColumn.propTypes = {
  video: PropTypes.shape(),
};

VideoColumn.defaultProps = {
  video: null,
};

const mapStateToProps = state => ({
  video: state.video,
});

export default connect(mapStateToProps)(VideoColumn);
