import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StSignUpPaper = styled(withTheme(Paper))(props => ({
  marginTop: props.theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: props.theme.spacing(2),
  justifyContent: 'center',
  boxShadow: '0px 0px 0px 0px',
}));
export default StSignUpPaper;
