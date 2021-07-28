import React, { useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { isAuthenticated } from '../utils/auth';
import { useLocation } from 'react-router-dom';
import HamburgerMenu from 'components/HamburgerMenu';
import StAppBar from 'styledComponents/StAppBar';

export default function MyAppBar() {
  const [path, setPath] = React.useState('Home');
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile' || location.pathname === '/updateprofile' || location.pathname === '/changepassword') {
      setPath('Profile');
    } else if (location.pathname === '/add') {
      setPath('Add activities');
    } else if (location.pathname === '/map') {
      setPath('Find activities');
    } else if (location.pathname === '/groups') {
      setPath('Groups');
    } else {
      setPath('Home');
    }
  }, [location.pathname]);

  return (
    <div>
      <StAppBar>
        <Toolbar>
          {isAuthenticated() ? (
            <>
              <HamburgerMenu />
              <Typography variant="h6">{path}</Typography>
            </>
          ) : (
            <Typography variant="h6">Login</Typography>
          )}
        </Toolbar>
      </StAppBar>
    </div>
  );
}
