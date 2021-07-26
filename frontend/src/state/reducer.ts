import { StateActions } from './actions';
import { activitiesReducer } from './activities/activitiesReducer';
import { IGlobalState } from './state';
import { userReducer } from './user/userReducer';

export function stateReducer(state: IGlobalState, action: StateActions): IGlobalState {
    const user = userReducer(state, action);
    if (user) return user;
    const activities = activitiesReducer(state, action);
    if (activities) return activities;
    return state;
}