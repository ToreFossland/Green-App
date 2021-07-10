import React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


const StAppBar = styled(AppBar) ({
    //stickToTop
  width: '100%',
  position: 'fixed',
  top: 0,
});

export default StAppBar;
