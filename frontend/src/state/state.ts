import { initialActivitiesState, IActivitiesState } from './activities/activitiesState';
import { initialUserState, IUserState } from './user/userState';

export interface IGlobalState extends IUserState, IActivitiesState {}

export const globalState: IGlobalState = { ...initialUserState, ...initialActivitiesState };
