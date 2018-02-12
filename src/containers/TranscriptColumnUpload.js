import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Transcript } from 'transcript-model';
import PropTypes from 'prop-types';

import readFile from '../helpers/readFile';
import { loadTranscript } from '../actions';

class TranscriptColumnUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop([file]) {
    if (file) {
      readFile(file)
        .then(contents => JSON.parse(contents))
        .then((json) => {
          if (json.transcription && json.segmentation) {
            return Transcript.fromKaldi(json.transcription, json.segmentation);
          }
          return Transcript.fromJSON(json);
        })
        .then((transcript) => {
          this.props.loadTranscript(transcript);
        });
    }
  }

  render() {
    return (
      <Dropzone
        onDrop={this.handleDrop}
        multiple={false}
        accept="application/json"
        className="dropzone embed-responsive embed-responsive-16by9"
        activeClassName="dropzone__active"
        rejectClassName="dropzone__reject"
      >
        Drop transcript here
      </Dropzone>
    );
  }
}

TranscriptColumnUpload.propTypes = {
  loadTranscript: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  loadTranscript: transcript => dispatch(loadTranscript(transcript)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptColumnUpload);
