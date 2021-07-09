import { ActionType, StateActions } from '../actions';
import { IGlobalState } from '../state';

export function userReducer(state: IGlobalState, action: StateActions): IGlobalState | null {
    switch (action.type) {
        case ActionType.User:
            return {
                ...state,
                user: action.payload.value
            };
        default:
            return null;
    }
}
