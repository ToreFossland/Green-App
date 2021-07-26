import IActivity from 'interfaces/IActivity';
import { ActionType } from '../actions';
import { IActivitiesState } from './activitiesState';

export interface Activities {
    type: ActionType.Activities;
    payload: {
        value: any;
    };
}

export const activities = (value: any): Activities => (
    {
    type: ActionType.Activities,
    payload: {
        value: value
    }
});