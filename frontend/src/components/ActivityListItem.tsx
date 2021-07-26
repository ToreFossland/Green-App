import React, { useState } from 'react';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SliderEffort from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';

export const ActivityListItem = (props : IActivity) => {
  const [id, setId] = useState<number>(props.id);
  const [points, setPoints] = useState<number>(props.points);
  const [name, setName] = useState<string>(props.name);
  const [error, setError] = useState<string>('');
  

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      const data = 1;
      if (data) {
        console.log(data);
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend
        setError(err);
      }
    }
  };

  return (
    <div>
      <ListItem style={{ justifyContent: 'center', width: '100%' }}>
        <div>
          <StFavorite />
          <label style={{ fontSize: '14pt' }}> {name} </label>
          <Button onClick={() => handleSubmit} color={'primary'} > Submit </Button> 
          <SliderEffort />
        </div>
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
