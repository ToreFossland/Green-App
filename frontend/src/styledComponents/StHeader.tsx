import { styled,withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StHeader = styled(withTheme(Paper))(props => ({
  boxShadow: '0px 0px 0px 0px',
  minHeight: props.theme.spacing(15),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'center',
  color: props.theme.palette.text.secondary,
}));

export default StHeader;
