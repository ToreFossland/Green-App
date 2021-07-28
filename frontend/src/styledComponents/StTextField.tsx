import { TextField } from '@material-ui/core';
import { styled, withTheme } from '@material-ui/core';

const StTextField = styled(withTheme(TextField))((props) => ({
  marginTop: props.theme.spacing(2),
  width: '80%',
}));

export default StTextField;
