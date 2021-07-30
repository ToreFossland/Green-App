import {initialPerformsActivitiesState, IPerformsActivitiesState } from './performsActivities/performsActivitiesState'
import { initialActivitiesState, IActivitiesState } from './activities/activitiesState';
import { initialUserState, IUserState } from './user/userState';
import { IChallengesState, initialChallengesState } from './challenges/challengesState';
export interface IGlobalState extends IUserState, IActivitiesState, IChallengesState, IPerformsActivitiesState{}
export const globalState: IGlobalState = { ...initialUserState, ...initialActivitiesState, ...initialPerformsActivitiesState,...initialChallengesState};
