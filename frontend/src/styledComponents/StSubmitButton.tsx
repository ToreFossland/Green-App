import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Paper';

const StSubmitButton = styled(withTheme(Button))((props) => ({
  '&:hover': {
    background: props.theme.palette.primary.main,
  },
  textTransform: 'none',
  variant: 'outline-secondary',
  marginBottom: props.theme.spacing(10),
  padding: props.theme.spacing(2),
  marginTop: 10,
  border: `3px solid ${props.theme.palette.primary.main}`,
  backgroundClip: props.theme.palette.success.main,
}));

export default StSubmitButton;
