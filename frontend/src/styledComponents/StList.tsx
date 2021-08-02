import List from '@material-ui/core/List';
import { styled, withTheme } from '@material-ui/core/styles';

const StList = styled(withTheme(List))((props) => ({
  width: '100%',
  alignItems: 'center',
}));

export default StList;
