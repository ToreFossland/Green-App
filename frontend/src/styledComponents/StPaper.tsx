import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StPaper = styled(withTheme(Paper))(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: props.theme.spacing(2),
  paddingBottom: props.theme.spacing(2),
  marginTop: props.theme.spacing(1),
  marginBottom: props.theme.spacing(2),
  textAlign: 'left',
  color: props.theme.palette.text.primary,
  width: '100%',
}));

export default StPaper;
