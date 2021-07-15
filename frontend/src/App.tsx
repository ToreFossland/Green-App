import React, { FC, useReducer } from 'react';
import { Routes } from './Routes';
import { GlobalContext } from './state/context';
import { stateReducer } from './state/reducer';
import { globalState } from './state/state';
import GlobalTheme from 'GlobalTheme';
import { ThemeProvider } from '@material-ui/styles';

const App: FC = () => {
  const [state, dispatch] = useReducer(stateReducer, globalState);
  const theme = GlobalTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

export default App;
