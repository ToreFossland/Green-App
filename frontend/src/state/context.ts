import { createContext, Dispatch } from 'react';
import { StateActions } from './actions';
import { globalState, IGlobalState } from './state';

export const GlobalContext = createContext<{
    state: IGlobalState;
    dispatch: Dispatch<StateActions>;
}>({
    state: globalState,
    dispatch: () => undefined
});
