import Button from '@material-ui/core/Card';
import { styled, withTheme } from '@material-ui/core';

const StButton = styled(withTheme(Button))((props) => ({
  paddingTop: props.theme.spacing(2),
  paddingBottom: props.theme.spacing(2),
  marginTop: props.theme.spacing(1),
  marginBottom: props.theme.spacing(1),
  alignItems: 'center',
}));

export default StButton;
