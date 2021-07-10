import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import PostImage from 'testImages/sykkel.jpg';

export default function Post() {
    return (
        <Card>
            <CardActionArea>
                <CardHeader
                    avatar={<Avatar style={{backgroundColor: 'purple'}}> EM </Avatar>}
                    title="Elise Müller"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Elise sykla til jobb i dag
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Varmt i dag! Sjekk bildene
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={PostImage}
                    title="Sykkel"
                />
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add a comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
