import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StSignUpPaper = styled(withTheme(Paper))(props => ({
  //boxShadow: '0px 0px 0px 0px',
  marginTop: props.theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: props.theme.spacing(2),
  color: props.theme.palette.secondary.main,
  justifyContent: 'center',
}));
export default StSignUpPaper;
