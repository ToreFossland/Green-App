import { ActionType } from '../actions';
export interface PerformsChallenges {
    type: ActionType.PerformsChallenges;
    payload: {
        value: any;
    };
}

export const PerformsChallenges = (value: any): PerformsChallenges => (
    {
    type: ActionType.PerformsChallenges,
    payload: {
        value: value
    }
});