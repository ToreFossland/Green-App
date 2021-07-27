
import { User } from './user/userActions';
import { Activities } from './activities/activitiesActions';
import { PerformsActivities } from './performsActivities/performsActivitiesActions';

export enum ActionType {
    User, Activities, PerformsActivities
}

export type StateActions =
    | User
    | Activities
    | PerformsActivities
    ;
