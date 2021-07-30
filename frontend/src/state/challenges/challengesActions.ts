import IChallenge from 'interfaces/IChallenge';
import { ActionType } from '../actions';

export interface Challenges {
    type: ActionType.Challenges;
    payload: {
        value: IChallenge[];
    };
}

export const challenges = (value: IChallenge[]): Challenges => (
    {
    type: ActionType.Challenges,
    payload: {
        value: value
    }
});