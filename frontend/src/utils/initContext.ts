import { Dispatch, useContext } from "react";
import { activities } from "state/activities/activitiesActions";
import { challenges } from "state/challenges/challengesActions";
import { GlobalContext } from "state/context";
import { performsActivities } from "state/performsActivities/performsActivitiesActions";
import { PerformsChallenges } from "state/performsChallenges/performsChallengesActions";
import { user } from "state/user/userActions";
import getActivities from "./activity";
import getChallenges from "./challenge";
import getPerformsActivities from "./performsActivities";
import getPerformsChallenge from "./performsChallenges";
import { getUser } from "./user";


const InitContext = async (dispatch : any) => {
        const myUser = await getUser();
        const myActivities = await getActivities();
        const myPerformsActivities = await getPerformsActivities();
        const myChallenges = await getChallenges();
        const myPerformsChallenges = await getPerformsChallenge();
        console.log(myPerformsActivities);
        dispatch(user(myUser));
        dispatch(activities(myActivities));
        dispatch(performsActivities(myPerformsActivities));
        dispatch(challenges(myChallenges));
        dispatch(PerformsChallenges(myPerformsChallenges));
  };

export default InitContext;