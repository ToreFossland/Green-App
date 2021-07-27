import { ActionType, StateActions } from '../actions';
import { IGlobalState } from '../state';

export function performsActivitiesReducer(state: IGlobalState, action: StateActions): IGlobalState | null {
    switch (action.type) {
        case ActionType.PerformsActivities:
            return {
                ...state,
                performsActivities: action.payload.value
            };
        default:
            return null;
    }
}
