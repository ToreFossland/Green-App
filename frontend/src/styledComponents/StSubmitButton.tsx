import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Paper';

const StSubmitButton = styled(withTheme(Button))(props => ({
  '&:hover': {
    background: props.theme.palette.primary.main,
  },
  textTransform: 'none',
  variant: 'outline-secondary',
  margin: props.theme.spacing(2),
  padding: props.theme.spacing(3),
  marginTop: 10,
  border: `3px solid ${props.theme.palette.primary.main}`,
  backgroundClip: props.theme.palette.success.main,
}));

export default StSubmitButton;
