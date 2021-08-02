import Button from '@material-ui/core/Card';
import { styled, withTheme } from '@material-ui/core';

const StButton = styled(withTheme(Button))((props) => ({
  alignItems: 'center',
}));

export default StButton;
