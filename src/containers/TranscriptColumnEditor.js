import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TranscriptEditor, { withTime, convertToTranscript } from 'transcript-editor';
import PropTypes from 'prop-types';

import 'transcript-editor/lib/css/TranscriptEditor.css';

import { toggleVideo, seekVideoRelative, updateEditor } from '../actions';

class TranscriptColumnEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleKeyBoardEvent = this.handleKeyBoardEvent.bind(this);
    this.saveTranscript = this.saveTranscript.bind(this);
  }

  handleEditorChange({ editorState, speakers }) {
    this.props.updateEditor(editorState, speakers);
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

  saveTranscript() {
    const transcript = convertToTranscript(
      this.props.editorState.getCurrentContent(),
      this.props.speakers,
    );

    const blob = new Blob([JSON.stringify(transcript.toJSON(), null, 2)], {
      type: 'application/json;charset=utf-8',
    });

    window.open(URL.createObjectURL(blob));
  }

  render() {
    return (
      <Fragment>
        <TranscriptEditor
          editorState={withTime(this.props.editorState, this.props.currentTime)}
          speakers={this.props.speakers}
          onChange={this.handleEditorChange}
          onKeyboardEvent={this.handleKeyBoardEvent}
          showSpeakers
        />
        <button className="btn btn-primary mt-2" onClick={this.saveTranscript}>
          Save transcript
        </button>
      </Fragment>
    );
  }
}

TranscriptColumnEditor.propTypes = {
  editorState: PropTypes.shape().isRequired,
  speakers: PropTypes.shape().isRequired,
  toggleVideo: PropTypes.func.isRequired,
  seekVideoRelative: PropTypes.func.isRequired,
  updateEditor: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  editorState: state.editor.editorState,
  speakers: state.editor.speakers,
  currentTime: state.video.time,
});

const mapDispatchToProps = dispatch => ({
  toggleVideo: () => dispatch(toggleVideo()),
  seekVideoRelative: time => dispatch(seekVideoRelative(time)),
  updateEditor: (editorState, speakers) => dispatch(updateEditor(editorState, speakers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptColumnEditor);
