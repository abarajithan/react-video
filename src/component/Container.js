import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VideoSectionComponent from './VideoSectionComponent';
import axios from 'axios';
import EpisodeListingComponent from './EpisodeListingComponent';
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import VideoComponent from './VideoComponent';

class Container extends Component {

    constructor(props){
        super(props);
        this.state={
            seasonlistpage: true,
            episodelistpage: false,
            sectionlist : [],
            episodelist: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/sections")
        .then(data => {
            this.setState({
                sectionlist: data.data,
                seasonlistpage: true,
                episodelistpage: false,
            });
        })
    }

    getVideoDetails = (section) => {
        axios.get("http://localhost:3000/section/"+section.id)
        .then(data => {
            this.setState({
                episodelist: data.data,
                currentSeason: section.name,
                seasonlistpage: false,
                episodelistpage: true,
                selectedEpisode:{}
            });
        })
    }

    setSelectedEpisode = (episode) => {
        this.setState({
            selectedEpisode: episode
        });
    }

    render() {
        return (
            <div>
                <AppBar color="secondary" position="static">
                <Toolbar>
                        {
                            this.state.episodelistpage &&
                            <IconButton onClick={()=> this.setState({seasonlistpage:true,episodelistpage:false}) }color="inherit" aria-label="Back">
                                <Icon>arrow_back</Icon>
                            </IconButton>
                        }
                    <Typography  variant="h6" color='inherit'>
                    {
                        this.state.seasonlistpage &&
                        "Video Categories"
                    }
                    {
                        this.state.episodelistpage &&
                        this.state.currentSeason
                    }
                    </Typography>
                    </Toolbar>
                </AppBar>
                {
                    this.state.seasonlistpage &&
                    <div className='row'>
                    {
                        this.state.sectionlist.map((item,key) => (
                            <VideoSectionComponent getVideoDetails={this.getVideoDetails} key={key} section={item} />
                        ))
                    }
                    </div>
                }
                {
                    this.state.episodelistpage && 
                    <div className='row'>
                        <div className='col-6'> 
                        {
                            this.state.episodelist.map((item,key) => (
                                
                                <EpisodeListingComponent setSelectedEpisode={this.setSelectedEpisode} key={key} episode={item} />
                            ))
                        }
                        </div>
                        {
                            Object.keys(this.state.selectedEpisode).length >0 &&
                            <div className='col-6'>
                                <VideoComponent episode={this.state.selectedEpisode} />
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Container;