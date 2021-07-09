import IUser from 'interfaces/IUser';
import { ActionType } from '../actions';

export interface User {
    type: ActionType.User;
    payload: {
        value: IUser;
    };
}

export const user = (value: IUser): User => ({
    type: ActionType.User,
    payload: {
        value: value
    }
});