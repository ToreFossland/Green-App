import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { isAuthenticated, logout } from '../utils/auth';
import { useHistory, useLocation } from 'react-router-dom';
import HamburgerMenu from 'components/HamburgerMenu';


export default function MyAppBar() {
  const history = useHistory();
  const [path, setPath] = React.useState('Home');
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      setPath('Profile');
    } else if (location.pathname === '/add') {
      setPath('Add activities');
    } else {
      setPath('Home');
    }
  })

  const handleLogoutClick = () => {
    logout();
    history.push('/logout');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {isAuthenticated() ? (
            <>
              <Hamburger />
              <Typography variant="h6">
                {path}
              </Typography>
            </>
          ) : (
            <Typography variant="h6">
              Login
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
