import Button from '@material-ui/core/Button';
import GaugeChart from 'react-gauge-chart';
import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import StAvatar from '../styledComponents/StAvatar';
import { Link as RouterLink, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from 'state/context';
import { user } from 'state/user/userActions';
import getUser from 'utils/user';

function Profile() {
  const history = useHistory();
  const [points, setPoints] = useState<bigint>();
  const [name, setName] = useState<string>('');
  const [epost, setEpost] = useState<string>('');
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<string>('');
  
  return (
    <StPaper elevation={0}>
      <StHeader>
        <StAvatar />
        <h1> {state.user?.name} </h1>
      </StHeader>
      <div>
        <p> {state.user?.name} </p>
        <p> Mail : {state.user?.name} </p>
        <h4> Your points: {state.user?.points}</h4>
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/updateprofile"
        >
          Update profile
        </Button>
      </div>
      {
        <div>
          <h2>You are 56% successful this week.</h2>
          <GaugeChart
            id="gauge-chart6"
            animate={false}
            nrOfLevels={13}
            colors={['#ffdb83', '#8FBC8F']}
            percent={0.6}
            needleColor="#345243"
            textColor="black"
          />
        </div>
      }
    </StPaper>
  );
}

export default Profile;

