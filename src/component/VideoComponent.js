import React, { Component } from 'react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    VolumeMenuButton,
    BigPlayButton 
  } from 'video-react';

class VideoComponent extends Component {

    componentDidMount() {
      // subscribe state change
      this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
      // copy player state to this component's state
      this.setState({
        player: state
      });
    }

    componentWillUnmount(){
      let storageIdentifier = "video"+this.props.episode.seasonId+""+ this.props.episode.episodeId;
      localStorage.setItem(storageIdentifier,Math.floor(this.state.player.currentTime));
    }

    render() {
        return (
            <Player ref="player" poster={require("../assets/got"+this.props.episode.episodeId+".jpg")}>
              <source src={this.props.episode.episodeURL} />
              <ControlBar>
                <BigPlayButton position="center" />
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <VolumeMenuButton vertical  />
              </ControlBar>
            </Player>
          );
    }
}

export default VideoComponent;