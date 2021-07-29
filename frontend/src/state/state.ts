import {
  initialPerformsActivitiesState,
  IPerformsActivitiesState,
} from './performsActivities/performsActivitiesState';
import {
  initialActivitiesState,
  IActivitiesState,
} from './activities/activitiesState';
import { initialUserState, IUserState } from './user/userState';
export interface IGlobalState
  extends IUserState,
    IActivitiesState,
    IPerformsActivitiesState {}
export const globalState: IGlobalState = {
  ...initialUserState,
  ...initialActivitiesState,
  ...initialPerformsActivitiesState,
};
