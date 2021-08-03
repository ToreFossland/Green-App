import { StateActions } from './actions';
import { IGlobalState } from './state';
import { activitiesReducer } from './activities/activitiesReducer';
import { challengesReducer } from './challenges/challengesReducer';
import { performsActivitiesReducer } from './performsActivities/performsActivitiesReducer';
import { performsChallengesReducer } from './performsChallenges/performsChallengesReducer';
import { userReducer } from './user/userReducer';

export function stateReducer(state: IGlobalState, action: StateActions): IGlobalState {
    const user = userReducer(state, action);
    if (user) return user;
    const activities = activitiesReducer(state, action);
    if (activities) return activities;
    const performsActivities = performsActivitiesReducer(state, action);
    if(performsActivities) return performsActivities;
    const challenges = challengesReducer(state, action);
    if(challenges) return challenges;
    const performsChallenges = performsChallengesReducer(state, action);
    if(performsChallenges) return performsChallenges;
    return state;
}