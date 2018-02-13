import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { playVideo, pauseVideo, videoTimeupdate } from '../actions';

class VideoColumnPlayer extends React.Component {
  componentDidMount() {
    this.player.addEventListener('play', this.handlePlay.bind(this));
    this.player.addEventListener('pause', this.handlePause.bind(this));
    this.player.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.video.playing && nextProps.video.playing && this.player.paused) {
      this.player.play();
    } else if (this.props.video.playing && !nextProps.video.playing && !this.player.paused) {
      this.player.pause();
    } else if (nextProps.video.seeked) {
      this.player.currentTime = nextProps.video.time;
    }
  }

  componentWillUpdate(nextProps) {
    return this.props.video.src !== nextProps.video.src;
  }

  handlePlay() {
    if (!this.props.video.playing) this.props.playVideo();
  }

  handlePause() {
    if (this.props.video.playing) this.props.pauseVideo();
  }

  handleTimeUpdate({ target: { currentTime } }) {
    this.props.videoTimeupdate(currentTime);
  }

  render() {
    return (
      <Fragment>
        <video
          src={this.props.video.src}
          controls
          style={{ width: '100%' }}
          ref={(e) => {
            this.player = e;
          }}
        />
        <div className="mt-2">
          <h5>Shortcuts</h5>
          <p>
            <strong>Ctrl+Space:</strong> play/pause
            <br />
            <strong>Ctrl+B:</strong> back 5 seconds
            <br />
            <strong>Ctrl+F:</strong> forward 5 seconds
          </p>
        </div>
      </Fragment>
    );
  }
}

VideoColumnPlayer.propTypes = {
  video: PropTypes.shape().isRequired,
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired,
  videoTimeupdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ video: state.video });

const mapDispatchToProps = dispatch => ({
  playVideo: () => dispatch(playVideo()),
  pauseVideo: () => dispatch(pauseVideo()),
  videoTimeupdate: time => dispatch(videoTimeupdate(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoColumnPlayer);
