import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import { loadVideo } from '../actions';

class TranscriptColumnUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop([file]) {
    this.props.loadVideo(file.preview);
  }

  render() {
    return (
      <Dropzone
        onDrop={this.handleDrop}
        multiple={false}
        className="dropzone embed-responsive embed-responsive-16by9"
        activeClassName="dropzone__active"
        rejectClassName="dropzone__reject"
      >
        Drop video here
      </Dropzone>
    );
  }
}

TranscriptColumnUpload.propTypes = {
  loadVideo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  loadVideo: video => dispatch(loadVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptColumnUpload);
