
import { ActionType, StateActions } from '../actions';
import { IGlobalState } from '../state';
export function challengesReducer(state: IGlobalState, action: StateActions): IGlobalState | null {
    switch (action.type) {
        case ActionType.Challenges:
            return {
                ...state,
                challenges: action.payload.value
            };
        default:
            return null;
    }
}
