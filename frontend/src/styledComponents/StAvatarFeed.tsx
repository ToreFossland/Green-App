import { styled, withTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

const StyledAvatarFeed = styled(withTheme(Avatar))(props => ({
  display: 'flex',
  fontSize: 20,
  backgroundColor: props.theme.palette.info.main
}));

const StAvatarFeed = (props: any) => {
  const firstLetter: any = props.firstname?.charAt(0);
  const secondLetter: any = props.lastname?.charAt(0);
  const nameInitials: string = firstLetter?.concat(secondLetter);
  return <StyledAvatarFeed>{nameInitials}</StyledAvatarFeed>;
};

export default StAvatarFeed;
