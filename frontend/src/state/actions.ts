
import { User } from './user/userActions';
import { Activities } from './activities/activitiesActions';
import { PerformsActivities } from './performsActivities/performsActivitiesActions';
import { Challenges } from './challenges/challengesActions';

export enum ActionType {
    User, Activities, PerformsActivities, Challenges
}

export type StateActions =
    | User
    | Activities
    | PerformsActivities
    | Challenges

    ;
