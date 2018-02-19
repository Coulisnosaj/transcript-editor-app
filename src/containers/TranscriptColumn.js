import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TranscriptColumnUpload from './TranscriptColumnUpload';
import TranscriptColumnEditor from './TranscriptColumnEditor';

const TranscriptColumn = ({ isTranscriptLoaded }) => {
  if (isTranscriptLoaded) {
    return <TranscriptColumnEditor />;
  }
  return <TranscriptColumnUpload />;
};

TranscriptColumn.propTypes = {
  isTranscriptLoaded: PropTypes.bool,
};

TranscriptColumn.defaultProps = {
  isTranscriptLoaded: null,
};

const mapStateToProps = state => ({
  isTranscriptLoaded: state.editor.isLoaded,
});

export default connect(mapStateToProps)(TranscriptColumn);
