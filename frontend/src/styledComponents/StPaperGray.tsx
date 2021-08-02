import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StPaperGray = styled(withTheme(Paper))((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 0px 0px 0px',
  backgroundColor: '#F1F1F1',
  paddingTop: props.theme.spacing(2),
  paddingBottom: props.theme.spacing(2),
  marginTop: props.theme.spacing(1),
  marginBottom: props.theme.spacing(1),
  textAlign: 'left',
  color: props.theme.palette.text.primary,
  width: '100%',
}));

export default StPaperGray;