import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Paper';
import GlobalTheme from 'GlobalTheme';

const theme = GlobalTheme;

const StSubmitButton = styled(Button)({
  textTransform: 'none',
  variant: 'outline-secondary',
  // color: theme.palette.primary.main,
  margin: theme.spacing(2),
  padding: theme.spacing(3),
  marginTop: 10,
  border: `3px solid ${theme.palette.primary.main}`,
  backgroundClip: theme.palette.success.main,
});

export default StSubmitButton;
