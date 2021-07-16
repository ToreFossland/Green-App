import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const StBottomNavigation = styled(BottomNavigation)({
  //stickToBottom
  width: '100%',
  position: 'fixed',
  bottom: 0,
  '& .MuiBottomNavigationAction-root': {
    '@media (max-width: 768px)': {
      minWidth: 'auto',
      padding: '6px 0',
    },
  },
});

export default StBottomNavigation;
