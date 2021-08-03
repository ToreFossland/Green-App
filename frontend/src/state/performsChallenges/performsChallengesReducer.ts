import { ActionType, StateActions } from '../actions';
import { IGlobalState } from '../state';

export function performsChallengesReducer(state: IGlobalState, action: StateActions): IGlobalState | null {
    switch (action.type) {
        case ActionType.PerformsChallenges:
            return {
                ...state,
                performsChallenges: action.payload.value
            };
        default:
            return null;
    }
}
