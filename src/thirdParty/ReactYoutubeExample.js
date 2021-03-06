import React, { Component } from 'react';
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&index=1&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
class ReactYoutubeExample extends Component {

  constructor() {
    super();

    this.videoOnReady = this.videoOnReady.bind(this);
    this.state = {
      playerObj: null
    };
  }

  componentWillUnmount() {
    const { playerObj } = this.state;
    console.log(playerObj.getCurrentTime());
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.seekTo(50);
    console.log(event.target);
    this.setState({
      playerObj: event.target
    });
  }

  videoOnPlay(event) {
    console.log(event.target.getCurrentTime());
  }

  videoStateChange(event) {
    console.log(event.target.getCurrentTime());
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { videoId } = this.props;

    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    );
  }


}

export default ReactYoutubeExample;