import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AccountCircle, AddCircle, Group, Map } from '@material-ui/icons';
import { isAuthenticated } from '../utils/auth';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StBottomNavigation from 'styledComponents/StBottomNavigation';

function MyBottomNavigation() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <div>
      {isAuthenticated() ? (
        <StBottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<Home />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="My Profile"
            value="/profile"
            icon={<AccountCircle />}
            component={Link}
            to="/profile"
          />
          <BottomNavigationAction
            label="Add Activity"
            value="/add"
            icon={<AddCircle />}
            component={Link}
            to="/add"
          />
          <BottomNavigationAction
            label="Challenges"
            value="/challenges"
            icon={<Group />}
            component={Link}
            to="/challenges"
          />
          <BottomNavigationAction
            label="Map"
            value="/map"
            icon={<Map />}
            component={Link}
            to="/map"
          />
        </StBottomNavigation>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MyBottomNavigation;
