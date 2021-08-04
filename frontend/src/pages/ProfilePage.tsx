import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import StAvatar from '../styledComponents/StAvatar';
import React, { useContext } from 'react';
import { GlobalContext } from 'state/context';
import { StGaugeChart } from 'components/GaugeChart';
import { EditButton } from 'components/EditButton';
import ActivityChart from 'components/ActivityChart';
import StBackgroundColor from 'styledComponents/StBackgroundColor';

function Profile() {
  const { state } = useContext(GlobalContext);
  const date = new Date();
  const monthName = new Intl.DateTimeFormat('en', { month : 'long' });
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <StBackgroundColor>
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
          <p> Email: {state.user?.email} </p>
          <h4> Total points: {state.user?.total_points}</h4>
          <h4> Weekly points: {state.user?.weekly_points}</h4>
        </div>
      </StPaper>
      <StPaper>
        <StGaugeChart points={state.user?.weekly_points} />
      </StPaper>
      <StPaper>
        <h2>My activities {monthName.format(date)} {year} </h2>
        <ActivityChart id={state.user?.id} month={month} day={day} />
        {/* <Table></Table> */}
      </StPaper>
    </StBackgroundColor>
  );
}

export default Profile;
