import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width: '100%',
});

export default StPaper;
