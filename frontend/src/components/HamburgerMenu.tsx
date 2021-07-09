import React from 'react';
import { Drawer, Button, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Menu, Settings, Lock, Report, EmojiEvents } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '../utils/auth';


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

  const handleClick = (item: number) => {
    if (item === 1) {
      logout();
      history.push('/logout');
      window.location.reload();
    }
  };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Settings', 'Scoreboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {' '}
              {index % 2 === 0 ? <Settings /> : <EmojiEvents />}{' '}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Report problem', 'Log out'].map((text, index) => (
          <ListItem button key={index} onClick={(e) => handleClick(index)}>
            <ListItemIcon>
              {index % 2 === 0 ? <Report /> : <Lock />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
