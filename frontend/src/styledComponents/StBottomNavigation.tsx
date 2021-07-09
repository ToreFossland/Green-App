
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const StBottomNavigation = styled(BottomNavigation)({
  //stickToBottom
  width: '100%',
  position: 'fixed',
  bottom: 0,
  '& .MuiBottomNavigationAction-root': {
    '@media (max-width: 768px)': {
      minWidth: 'auto',
      padding: '6px 0',
    },
  },
});


function MyBottomNavigation() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  export default StBottomNavigation;