import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StPaper = styled(Paper)({
  //boxShadow: '0px 0px 0px 0px',
  //marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  //width: '70%',
  //justifyContent: "center",
});

export default StPaper;
