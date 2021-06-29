import React from 'react';
import { makeStyles, createStyles, Theme, styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import userEvent from '@testing-library/user-event';




const MyAvatar = styled(Avatar) ({
  display: 'flex',
});


export default function styledAvatar() {
const profilePic = false;

  return <MyAvatar alt="profile picture" src={profilePic ? profilePic : "./logo192.png"}> </MyAvatar>
}
