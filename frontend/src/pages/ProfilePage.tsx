import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import StAvatar from '../styledComponents/StAvatar';
import { useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { GlobalContext } from 'state/context';
import { StGaugeChart } from 'components/GaugeChart';
import { EditButton } from 'components/EditButton';

function Profile() {
  const history = useHistory();
  const { state, dispatch } = useContext(GlobalContext);
  // const [points, setPoints] = useState<bigint>();
  // const [name, setName] = useState<string>('');
  // const [epost, setEpost] = useState<string>('');
  // const [error, setError] = useState<string>('');

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
          <p> Comapny: {state.user?.company} </p>
          <h4> Your points: {state.user?.points}</h4>
        </div>
      </StPaper>
      <StPaper>
        <StGaugeChart />
      </StPaper>
    </div>
  );
}

export default Profile;
