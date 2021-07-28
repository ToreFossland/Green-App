import IUser from 'interfaces/IUser';
import React, { Component } from 'react';

export const ScorePost = (props: IUser) => {
  return (
    <div>
      <h1>
        {props.first_name} {props.last_name}
      </h1>
      <p>Score: {props.points}</p>
    </div>
  );
};
