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
  const [points, setPoints] = useState<bigint>();
  const [name, setName] = useState<string>('');
  const [epost, setEpost] = useState<string>('');
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<string>('');

  return (
    <div>
      <StPaper>
        <StHeader>
          <StAvatar />
          <h1> Kari Nordman </h1>
          {/* <h1> {state.user?.name} </h1> */}
          <EditButton />
        </StHeader>
        <div>
          <p> {state.user?.email} </p>
          <p> Mail : {state.user?.email} </p>
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
