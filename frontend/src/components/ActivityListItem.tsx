import React from 'react';
import StSwitch from '../styledComponents/StSwitch';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SliderEffort from './SliderEffort';

export const ActivityListItem = () => {
  return (
    <div>
      <ListItem style={{ justifyContent: 'center', width: '100%' }}>
        <div>
          <StFavorite />
          <label style={{ fontSize: '14pt' }}>Activity name</label>
          <StSwitch />
          <SliderEffort />
        </div>
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
