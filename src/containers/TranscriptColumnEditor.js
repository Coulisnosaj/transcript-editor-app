import React from 'react';
import { connect } from 'react-redux';
import TranscriptEditor from 'transcript-editor';
import { Transcript } from 'transcript-model';
import PropTypes from 'prop-types';

class TranscriptColumnEditor extends React.Component {
  constructor(props) {
    super(props);

    this.onTranscriptUpdate = this.onTranscriptUpdate.bind(this);
  }

  render() {
    return (
      <TranscriptEditor
        transcript={this.props.transcript}
        onTranscriptUpdate={(transcript) => {
          console.log(transcript);
        }}
        showSpeakers
      />
    );
  }
}

TranscriptColumnEditor.propTypes = {
  transcript: PropTypes.instanceOf(Transcript).isRequired,
};

const mapStateToProps = state => ({
  transcript: state.transcript,
});

export default connect(mapStateToProps)(TranscriptColumnEditor);
