import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Paper';
//import GlobalTheme from 'GlobalTheme';

//const theme = GlobalTheme;

const StSubmitButton = styled(Button)({
  textTransform: 'none',
  variant: 'outline-secondary',
  color: '#8FBC8F',
  margin: spacing(2),
  padding: spacing(1),
  marginTop: 10,
  borderColor: '#8FBC8F',
  backgroundClip: '#8FBC8F',
});

export default StSubmitButton;
