import IChallenge from "interfaces/IChallenge";

export interface IChallengesState{
    challenges?: IChallenge[];
}

export const initialChallengesState = {
    challenges: undefined
};