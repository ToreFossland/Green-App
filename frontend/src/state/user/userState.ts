import IUser from "interfaces/IUser";

export interface IUserState {
    user?: IUser;
}

export const initialUserState = {
    user: undefined
};