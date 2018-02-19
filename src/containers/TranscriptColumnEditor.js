import React from 'react';
import { connect } from 'react-redux';
import TranscriptEditor from 'transcript-editor';
import PropTypes from 'prop-types';
import { toggleVideo, seekVideoRelative, updateEditor } from '../actions';

class TranscriptColumnEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleKeyBoardEvent = this.handleKeyBoardEvent.bind(this);
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

  render() {
    return (
      <TranscriptEditor
        editorState={this.props.editorState}
        speakers={this.props.speakers}
        onChange={this.handleEditorChange}
        onKeyboardEvent={this.handleKeyBoardEvent}
        showSpeakers
      />
    );
  }
}

TranscriptColumnEditor.propTypes = {
  editorState: PropTypes.shape().isRequired,
  speakers: PropTypes.shape().isRequired,
  toggleVideo: PropTypes.func.isRequired,
  seekVideoRelative: PropTypes.func.isRequired,
  updateEditor: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editorState: state.editor.editorState,
  speakers: state.editor.speakers,
});

const mapDispatchToProps = dispatch => ({
  toggleVideo: () => dispatch(toggleVideo()),
  seekVideoRelative: time => dispatch(seekVideoRelative(time)),
  updateEditor: (editorState, speakers) => dispatch(updateEditor(editorState, speakers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptColumnEditor);
