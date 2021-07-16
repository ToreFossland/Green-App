import { createTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#8FBC8F',
    },
    secondary: {
      main: '#d56c6f',
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
