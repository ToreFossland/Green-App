import React, { useContext, useState } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import PostImage from 'testImages/sykletiljobb.svg';
import StCard from 'styledComponents/StCard';
import getPerformsActivities, { deletePerformsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import StAvatarFeed from 'styledComponents/StAvatarFeed';
import PostMenu from 'components/PostMenu';


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

    const onDelete = async () => {
        deletePerformsActivity(props.id);
        const myPerformsActivities = await getPerformsActivities();
        dispatch(performsActivities(myPerformsActivities));
        props.setDeleted(true);
    };

    return (
        <StCard>
            <CardHeader
                avatar={<StAvatarFeed firstname={props.firstName} lastname={props.lastName} />}
                title={name}
                subheader={props.date}
                action={ <PostMenu onDelete={onDelete} /> }
            />
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                    {props.activityName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.effort} effort. {props.points} points.
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={PostImage}
                title="Sykkel"
                height= '300'
                width='100%'
            />
            <CardActions style={{alignItems: 'center', justifyContent: 'space-between'}} >
                <IconButton aria-label="add to favorites" color={likeButtonColor} onClick={onLikeButtonClick} >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add a comment">
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
