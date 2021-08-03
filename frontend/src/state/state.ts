import { initialPerformsActivitiesState, IPerformsActivitiesState} from './performsActivities/performsActivitiesState';
import { initialActivitiesState, IActivitiesState } from './activities/activitiesState';
import { initialUserState, IUserState } from './user/userState';
import { IChallengesState, initialChallengesState } from './challenges/challengesState';
import { IPerformsChallengesState, initialPerformsChallengesState } from './performsChallenges/performsChallengesState';

export interface IGlobalState
  extends IUserState,
    IActivitiesState,
    IChallengesState,
    IPerformsActivitiesState,
    IPerformsChallengesState
    {}

export const globalState: IGlobalState = {
  ...initialUserState,
  ...initialActivitiesState,
  ...initialChallengesState,
  ...initialPerformsActivitiesState,
  ...initialPerformsChallengesState
};
