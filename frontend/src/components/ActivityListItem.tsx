import React from 'react';
import StSwitch from '../styledComponents/StSwitch';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

export const ActivityListItem = () => {
  return (
    <div>
      <ListItem style={{justifyContent:"center", width:"100%"}}>
        <StFavorite />
        <h3>Activity name</h3>
        <StSwitch />
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
