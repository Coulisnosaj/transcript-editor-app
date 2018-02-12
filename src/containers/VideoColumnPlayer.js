import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class VideoColumnPlayer extends React.Component {
  componentDidMount() {
    this.player.addEventListener('timeupdate', this.handleTimeUpdate);
  }

  handleTimeUpdate({ target: { currentTime } }) {
    this.currentTime = currentTime;
  }

  render() {
    return (
      <video
        src={this.props.video}
        controls
        style={{ width: '100%' }}
        ref={(e) => {
          this.player = e;
        }}
      />
    );
  }
}

VideoColumnPlayer.propTypes = {
  video: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ video: state.video });

export default connect(mapStateToProps)(VideoColumnPlayer);
