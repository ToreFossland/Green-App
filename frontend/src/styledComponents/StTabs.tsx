import { styled, withTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const StTab = styled(withTheme(Tab))(props => ({
  boxShadow: '0px 0px 0px 0px',
  padding: 0,
}));

export default StTab;