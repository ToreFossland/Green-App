
import { User } from './user/userActions';
import { Activities } from './activities/activitiesActions';
import { PerformsActivities } from './performsActivities/performsActivitiesActions';
import { Challenges } from './challenges/challengesActions';
import {PerformsChallenges} from './performsChallenges/performsChallengesActions';

export enum ActionType {
    User, Activities, PerformsActivities, Challenges, PerformsChallenges
}

export type StateActions =
    | User
    | Activities
    | PerformsActivities
    | Challenges
    | PerformsChallenges
    ;
