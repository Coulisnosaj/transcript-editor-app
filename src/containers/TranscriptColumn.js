import React from 'react';
import { connect } from 'react-redux';
import { Transcript } from 'transcript-model';
import PropTypes from 'prop-types';

import TranscriptColumnUpload from './TranscriptColumnUpload';
import TranscriptColumnEditor from './TranscriptColumnEditor';

const TranscriptColumn = ({ transcript }) => {
  if (transcript) {
    return <TranscriptColumnEditor />;
  }
  return <TranscriptColumnUpload />;
};

TranscriptColumn.propTypes = {
  transcript: PropTypes.instanceOf(Transcript),
};

TranscriptColumn.defaultProps = {
  transcript: null,
};

const mapStateToProps = state => ({
  transcript: state.transcript,
});

export default connect(mapStateToProps)(TranscriptColumn);
