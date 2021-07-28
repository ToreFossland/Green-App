import React, { useContext, useState } from 'react';
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
import StCard from 'styledComponents/StCard';
import getPerformsActivities, { deletePerformsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';

const Post = (props : any) => {
    const { dispatch } = useContext(GlobalContext);
    let name = `${props.firstName} ${props.lastName}`
    const [liked, setLiked] = useState<boolean>(false);
    const [likeButtonColor, setLikeButtonColor] = useState<"default" | "secondary" | "inherit" | "primary" | undefined >("default");

    const likeButtonColorChange = async () => {
        if (!liked) {
            setLikeButtonColor('secondary');
        } else {
            setLikeButtonColor('default');
        }
    }

    const onLikeButtonClick = () => {
        setLiked(!(liked));
        likeButtonColorChange();
    };

    const onCommentClick = async () => {
        deletePerformsActivity(props.id);
        const myPerformsActivities = await getPerformsActivities();
        dispatch(performsActivities(myPerformsActivities));
    };

    return (
        <StCard>
            <CardActionArea>
                <CardHeader
                    avatar={<Avatar style={{backgroundColor: 'purple'}}> EM </Avatar>}
                    title={name}
                    subheader={props.date}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.activityName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Varmt i dag! Fin tur med gjengen. Sjekk bildene
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={PostImage}
                    title="Sykkel"
                />
            </CardActionArea>
            <CardActions style={{alignItems: 'center', justifyContent: 'space-between'}} >
                <IconButton aria-label="add to favorites" color={likeButtonColor} onClick={onLikeButtonClick} >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add a comment" onClick={onCommentClick}>
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </StCard>
    )
}

export default Post;
