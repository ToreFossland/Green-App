import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const StAppBar = styled(AppBar)({
  //stickToTop
  width: '100%',
  position: 'fixed',
  top: 0,
  boxShadow: '0px 0px 0px 0px',
});

export default StAppBar;
