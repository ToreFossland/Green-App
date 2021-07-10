import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
  width: '100%',
});

export default StPaper;
