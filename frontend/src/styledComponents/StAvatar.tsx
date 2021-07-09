import React from 'react';
import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AccountCircle } from '@material-ui/icons';


const StAvatar = styled(Avatar) ({
  display: 'flex',
  fontSize: 60,
});


export default function styledAvatar() {
  const profilePic = false;

  return profilePic ? (<StAvatar alt="profile picture" src={profilePic}> </StAvatar>) : <AccountCircle style={{ fontSize: 60 }}/>


}
