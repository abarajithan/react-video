import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class VideoSectionComponent extends Component {
    render() {
        return (
            <Card className="m-lr-10 m-t-20 col-3">
                <CardMedia
                    component="img"
                    alt="Video Icon"
                    style={{width: 130,marginLeft:90}}
                    image={require("../assets/video_placeholder.png")}
                    title="Video Icon"
                />
                <CardActionArea onClick={()=> this.props.getVideoDetails(this.props.section)}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.section.name}
                        <div className="subtitle">{this.props.section.numberofVideos} Videos </div>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default VideoSectionComponent;