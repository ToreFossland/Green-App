import IChallenge from 'interfaces/IActivity';
import { ActionType } from '../actions';

export interface Challenges {
    type: ActionType.Challenges;
    payload: {
        value: IChallenge[];
    };
}

export const activities = (value: IChallenge[]): Challenges => (
    {
    type: ActionType.Challenges,
    payload: {
        value: value
    }
});