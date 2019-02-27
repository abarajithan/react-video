import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class EpisodeListingComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            minutes: 0,
            secs: 0
        }
    }

    componentDidMount(){
        let storageIdentifier = "video"+this.props.episode.seasonId+""+ this.props.episode.episodeId;
        let secs = localStorage.getItem(storageIdentifier);
        if(secs != null){
            this.setState({
                minutes: Math.floor(secs/60),
                secs:secs%60
            });
        }
    }

    render() {
        return (
            <div className='episode-listing row' onClick={()=>this.props.setSelectedEpisode(this.props.episode)} >
                <div className='col-2'>
                    <img 
                        src={require("../assets/video_placeholder.png")}
                        alt="Video Icon"
                        style={{width: 30}}
                    />
                </div>
                <div className='col-10'>
                    <Typography gutterBottom variant="h6" component="h6">
                        {this.props.episode.episodeName}
                    </Typography>
                    {
                        (this.state.minutes != 0 || this.state.secs !=0) &&
                        <div className='grayed-text'>
                            Watched upto {this.state.minutes}:{this.state.secs}
                        </div>
                    }
                 </div>
            </div>
        );
    }
}

export default EpisodeListingComponent;