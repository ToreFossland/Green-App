import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8FBC8F',
    },
    secondary: {
      main: '#009169',
    },
    info: {
      main: '#0092bb',
    },
    warning: {
      main: '#FAEDCD',
    },
    error: {
      main: '#D4A373',
    },
    success: {
      main: green[500],
    },
  },
});

export default GlobalTheme;
