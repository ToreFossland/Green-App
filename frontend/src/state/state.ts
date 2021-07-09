import { initialUserState, IUserState } from './user/userState';

export interface IGlobalState extends IUserState {}

export const globalState: IGlobalState = { ...initialUserState };
