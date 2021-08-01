import React from 'react';
import { GlobalContext } from 'state/context';
import List from '@material-ui/core/List';
import ScrollingDialog from 'components/ScrollingDialog';

const ChallengesPage = () => {
  const { state } = React.useContext(GlobalContext);
  const challenges = state?.challenges;
  return (
    <div>
      <List style={{ width: '100%' }}>
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
      </List>
    </div>
  );
};

export default ChallengesPage;
