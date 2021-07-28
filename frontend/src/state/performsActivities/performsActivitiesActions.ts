import { ActionType } from '../actions';
export interface PerformsActivities {
    type: ActionType.PerformsActivities;
    payload: {
        value: any;
    };
}

export const performsActivities = (value: any): PerformsActivities => (
    {
    type: ActionType.PerformsActivities,
    payload: {
        value: value
    }
});