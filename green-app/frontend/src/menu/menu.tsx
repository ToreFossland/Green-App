import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const StBottomNavigation = styled(BottomNavigation) ({
  //stickToBottom
  width: '100%',
  position: 'fixed',
  bottom: 0,
});

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StBottomNavigation value={value} onChange={handleChange} >
      <BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="My Profile" value="profile" icon={<AccountCircleIcon />} />
      <BottomNavigationAction component={Link} to="/activities" label="Add Activity" value="activities" icon={<AddCircleIcon />} />
    </StBottomNavigation>
  );
}
