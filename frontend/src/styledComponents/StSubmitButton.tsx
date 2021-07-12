import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Paper';
import GlobalTheme from 'GlobalTheme';

const theme = GlobalTheme;

const StSubmitButton = styled(Button)({
  textTransform: 'none',
  variant: 'outlined',
  color: 'primary',
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  marginTop: 10,
  borderColor: 'secondary',
});

export default StSubmitButton;
