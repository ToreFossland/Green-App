import React, { FC, useReducer } from 'react';
import { Routes } from './Routes';
import { GlobalContext } from './state/context';
import { stateReducer } from './state/reducer';
import { globalState } from './state/state';
import GlobalTheme from 'GlobalTheme';

const App: FC = () => {
  const [state, dispatch] = useReducer(stateReducer, globalState);
  const theme = GlobalTheme;
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Routes />
    </GlobalContext.Provider>
  );
};

export default App;
