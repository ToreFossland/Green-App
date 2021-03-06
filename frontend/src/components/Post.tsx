import React, { useContext, useState } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import StCard from 'styledComponents/StCard';
import getPerformsActivities, {
  deletePerformsActivity,
} from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import StAvatarFeed from 'styledComponents/StAvatarFeed';
import PostMenu from 'components/PostMenu';
import { updateUser } from 'utils/auth';
import { getUser } from 'utils/user';
import { user } from 'state/user/userActions';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBiking,
  faCarrot,
  faTrashAlt,
  faTshirt,
  faCar,
  faTree,
  faDrumstickBite,
  faBus,
} from '@fortawesome/free-solid-svg-icons';

const Post = (props: any) => {
  const { dispatch, state } = useContext(GlobalContext);
  const currentUser = state.user!;
  let name = `${props.firstName} ${props.lastName}`;
  const [liked, setLiked] = useState<boolean>(false);
  const [likeButtonColor, setLikeButtonColor] = useState<
    'default' | 'secondary' | 'inherit' | 'primary' | undefined
  >('default');

  const likeButtonColorChange = async () => {
    if (!liked) {
      setLikeButtonColor('secondary');
    } else {
      setLikeButtonColor('default');
    }
  };

  const onLikeButtonClick = () => {
    setLiked(!liked);
    likeButtonColorChange();
  };

  const onDelete = async () => {
    deletePerformsActivity(props.id);
    const myPerformsActivities = await getPerformsActivities();
    dispatch(performsActivities(myPerformsActivities));
    props.setDeleted(true);
    props.setOpen(true);
    try {
      const data = await updateUser(
        currentUser.id,
        currentUser.email,
        currentUser.total_points - props.points,
        currentUser.weekly_points - props.points
      );

      if (data) {
        const myUser = await getUser();
        dispatch(user(myUser));
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        props.setError(err.message);
        console.log(props.error);
      } else {
        // handle errors thrown from backend
        props.setError(err);
        console.log(props.error);
      }
    }
  };

  let timestamp: number = +props.date;
  let date: Date = new Date(timestamp);
  return (
    <StCard>
      <CardHeader
        avatar={
          <StAvatarFeed firstname={props.firstName} lastname={props.lastName} />
        }
        title={name}
        subheader={date.toDateString()}
        action={
          currentUser.id === props.user_id && <PostMenu onDelete={onDelete} />
        }
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {props.activityName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.effort} effort. {props.points} points.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6" color="primary" component="p">
            {props.activityName === 'Bike to work' && (
              <FontAwesomeIcon icon={faBiking} />
            )}
            {props.activityName === 'Eat a vegetarian meal' && (
              <FontAwesomeIcon icon={faCarrot} />
            )}
            {props.activityName === 'Pick up trash' && (
              <FontAwesomeIcon icon={faTrashAlt} />
            )}
            {props.activityName === 'Donate old clothes' && (
              <FontAwesomeIcon icon={faTshirt} />
            )}
            {props.activityName === 'Carpool to location' && (
              <FontAwesomeIcon icon={faCar} />
            )}
            {props.activityName === 'Plant a tree' && (
              <FontAwesomeIcon icon={faTree} />
            )}
            {props.activityName === 'Limit food waste' && (
              <FontAwesomeIcon icon={faDrumstickBite} />
            )}
            {props.activityName === 'Use public transport' && (
              <FontAwesomeIcon icon={faBus} />
            )}
          </Typography>
        </CardContent>
      </Grid>
      <CardActions
        style={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <IconButton
          aria-label="add to favorites"
          color={likeButtonColor}
          onClick={onLikeButtonClick}
        >
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
  );
};

export default Post;
