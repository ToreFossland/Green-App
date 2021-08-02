import React from 'react';
import { GlobalContext } from 'state/context';
import ScoreTabs from 'components/ScoreTabs';

const ChallengesPage = () => {
  const { state } = React.useContext(GlobalContext);
  const challenges = state?.challenges;
  return (
    <div>
      <ScoreTabs />
    </div>
  );
};

export default ChallengesPage;
