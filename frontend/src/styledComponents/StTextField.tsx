import { TextField } from '@material-ui/core';
import { styled } from '@material-ui/core';
import GlobalTheme from 'GlobalTheme';

const theme = GlobalTheme;

const StTextField = styled(TextField)({
  marginTop: theme.spacing(2),
  width: '80%',
});

export default StTextField;
