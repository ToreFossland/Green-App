import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home, AccountCircle, AddCircle, Group, Map} from '@material-ui/icons';

import { isAuthenticated } from '../utils/auth';

const StBottomNavigation = styled(BottomNavigation) ({
  //stickToBottom
  width: '100%',
  position: 'fixed',
  bottom: 0,
  "& .MuiBottomNavigationAction-root": {
    "@media (max-width: 768px)": {
      minWidth: "auto",
      padding: "6px 0"
    }
  }
});

export default function MyBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {isAuthenticated() ? (
         <StBottomNavigation value={value} onChange={handleChange} >
         <BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<Home />} />
         <BottomNavigationAction component={Link} to="/profile" label="My Profile" value="profile" icon={<AccountCircle />} />
         <BottomNavigationAction component={Link} to="/add" label="Add Activity" value="activities" icon={<AddCircle />} />
         <BottomNavigationAction component={Link} to="/" label="Groups" value="Groups" icon={<Group />} />
         <BottomNavigationAction component={Link} to="/" label="Map" value="Map" icon={<Map />} />
        </StBottomNavigation>
      ) : (
        <div></div>
      )}
    </div>
  );
}
