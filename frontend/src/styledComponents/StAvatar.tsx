import React from 'react'; 
import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const StAvatar = styled(Avatar) ({
  display: 'flex',
});


export default function styledAvatar() {
const profilePic = false;

  return <StAvatar alt="profile picture" src={profilePic ? profilePic : "./logo192.png"}> </StAvatar>
}
