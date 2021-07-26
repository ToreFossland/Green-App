import IActivity from 'interfaces/IActivity';
import { ActionType } from '../actions';
import { IActivitiesState } from './activitiesState';

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