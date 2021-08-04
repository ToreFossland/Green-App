import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  AccountCircle,
  AddCircle,
  EmojiEvents,
  Map,
} from '@material-ui/icons';
import { isAuthenticated } from '../utils/auth';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StBottomNavigation from 'styledComponents/StBottomNavigation';

function BottomNavigation() {
  let pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  if (pathname === '/logout') {
    pathname = '/';
  }
  const [value, setValue] = React.useState(pathname);

  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <div>
      {isAuthenticated() && (
        <StBottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<Home />}
            component={Link}
            to="/"
            showLabel={true}
          />
          <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<AccountCircle />}
            component={Link}
            to="/profile"
            showLabel={true}
          />
          <BottomNavigationAction
            label="Activity"
            value="/add"
            icon={<AddCircle />}
            component={Link}
            to="/add"
            showLabel={true}
          />
          <BottomNavigationAction
            label="Challenges"
            value="/challenges"
            icon={<EmojiEvents />}
            component={Link}
            to="/challenges"
            showLabel={true}
          />
          <BottomNavigationAction
            label="Map"
            value="/map"
            icon={<Map />}
            component={Link}
            to="/map"
            showLabel={true}
          />
        </StBottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigation;
