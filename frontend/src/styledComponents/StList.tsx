import List from '@material-ui/core/List';
import { styled, withTheme } from '@material-ui/core/styles';

const StList = styled(withTheme(List))((props) => ({
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#F1F1F1',
  marginTop: props.theme.spacing(1),
}));

export default StList;
