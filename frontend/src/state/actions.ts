
import { User } from './user/userActions';
import { Activities } from './activities/activitiesActions';

export enum ActionType {
    User, Activities
}

export type StateActions =
    | User
    | Activities;
