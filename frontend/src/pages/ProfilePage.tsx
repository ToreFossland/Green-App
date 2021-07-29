import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import StAvatar from '../styledComponents/StAvatar';
import React, { useContext } from 'react';
import { GlobalContext } from 'state/context';
import { StGaugeChart } from 'components/GaugeChart';
import { EditButton } from 'components/EditButton';
import Scoreboard from 'components/Scoreboard';
import Table from 'components/Table';

function Profile() {
  const { state } = useContext(GlobalContext);
  let point: number = state.user?.points!;
  return (
    <div>
      <StPaper>
        <StHeader>
          <StAvatar />
          <h1>
            {' '}
            {state.user?.first_name} {state.user?.last_name}{' '}
          </h1>
          <EditButton />
        </StHeader>
        <div>
          <p> Mail : {state.user?.email} </p>
          <h4> Your points: {state.user?.points}</h4>
        </div>
      </StPaper>
      <StPaper>
        <StGaugeChart points={point} />
      </StPaper>
      <StPaper>
        <Table></Table>
      </StPaper>
    </div>
  );
}

export default Profile;
