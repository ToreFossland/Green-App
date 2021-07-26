import IActivity from "interfaces/IActivity";

export interface IActivitiesState{
    activities?: IActivity[];
}

export const initialActivitiesState = {
    activities: undefined
};