import { StateActions } from './actions';
import { IGlobalState } from './state';
import { userReducer } from './user/userReducer';

export function stateReducer(state: IGlobalState, action: StateActions): IGlobalState {
    const user = userReducer(state, action);
    if (user) return user;
    return state;
}