import { ActionType, StateActions } from '../actions';
import { IGlobalState } from '../state';

export function activitiesReducer(state: IGlobalState, action: StateActions): IGlobalState | null {
    switch (action.type) {
        case ActionType.Activities:
            return {
                ...state,
                activities: action.payload.value
            };
        default:
            return null;
    }
}
