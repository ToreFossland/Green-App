import React from 'react';
import { makeStyles, createStyles, Theme, styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import userEvent from '@testing-library/user-event';




const MyAvatar = styled(Avatar) ({
  display: 'flex',
  backgroundImage: "./logo192.png"
});


export default function styledAvatar() {
  return <MyAvatar alt="profile picture"> </MyAvatar>
}

//src for myAvatar photo
//src={profilePic ? profilePic : "./logo192.png"}