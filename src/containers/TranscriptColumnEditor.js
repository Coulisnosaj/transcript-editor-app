import React from 'react';
import { connect } from 'react-redux';
import TranscriptEditor from 'transcript-editor';
import { Transcript } from 'transcript-model';
import PropTypes from 'prop-types';
import { toggleVideo, seekVideoRelative } from '../actions';

class TranscriptColumnEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyBoardEvent = this.handleKeyBoardEvent.bind(this);
  }

  handleKeyBoardEvent(event) {
    if (event.ctrlKey) {
      switch (event.key) {
        case ' ':
          this.props.toggleVideo();
          break;
        case 'f':
          this.props.seekVideoRelative(5);
          break;
        case 'b':
          this.props.seekVideoRelative(-5);
          break;
        default:
          return;
      }
      event.preventDefault();
    }
  }

  render() {
    return (
      <TranscriptEditor
        transcript={this.props.transcript}
        onTranscriptUpdate={(transcript) => {
          console.log(transcript);
        }}
        onKeyboardEvent={this.handleKeyBoardEvent}
        showSpeakers
      />
    );
  }
}

TranscriptColumnEditor.propTypes = {
  transcript: PropTypes.instanceOf(Transcript).isRequired,
  toggleVideo: PropTypes.func.isRequired,
  seekVideoRelative: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  transcript: state.transcript,
});

const mapDispatchToProps = dispatch => ({
  toggleVideo: () => dispatch(toggleVideo()),
  seekVideoRelative: time => dispatch(seekVideoRelative(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptColumnEditor);
