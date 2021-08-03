import ScrollingDialog from 'components/ScrollingDialog';
import React from 'react';
import StList from 'styledComponents/StList';
import { GlobalContext } from 'state/context';

function ChallengeListPage() {
    const { state } = React.useContext(GlobalContext);
    const challenges = state?.challenges;

    return (
        <StList>
            {challenges?.map((item) => (
              <ScrollingDialog
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                points={item.points}
                activity_id={item.activity_id}
              />
            ))}
        </StList>
    )
}

export default ChallengeListPage
