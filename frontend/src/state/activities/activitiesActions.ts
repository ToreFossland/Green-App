import IActivity from 'interfaces/IActivity';
import { ActionType } from '../actions';

export interface Activities {
    type: ActionType.Activities;
    payload: {
        value: IActivity[];
    };
}

export const activities = (value: IActivity[]): Activities => (
    {
    type: ActionType.Activities,
    payload: {
        value: value
    }
});