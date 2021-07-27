import React from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { Menu, Lock, Report } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '../utils/auth';
import { Link as RouterLink } from 'react-router-dom';

type Anchor = 'left';

export default function HamburgerMenu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const history = useHistory();

  const handleClick = () => {
    logout();
    history.push('/logout');
    window.location.reload();
  };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Report problem" component={RouterLink} to="/">
          <ListItemIcon>
            {' '}
            <Report />{' '}
          </ListItemIcon>
          <ListItemText> Report problem </ListItemText>
        </ListItem>
        <ListItem
          button
          key="Log out"
          component={RouterLink}
          to="/logout"
          onClick={() => handleClick()}
        >
          <ListItemIcon>
            {' '}
            <Lock />{' '}
          </ListItemIcon>
          <ListItemText> Log out </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
