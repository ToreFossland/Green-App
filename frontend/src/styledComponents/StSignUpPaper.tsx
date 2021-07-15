import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StSignUpPaper = styled(Paper)({
  //boxShadow: '0px 0px 0px 0px',
  marginTop: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  color: theme.palette.secondary.main,
  justifyContent: 'center',
});

export default StSignUpPaper;
