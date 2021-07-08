import React from "react";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
//import GaugeChart from 'react-gauge-chart';
import StHeader from "../styledComponents/StHeader";
import StPaper from "../styledComponents/StPaper";
import StAvatar from "../styledComponents/StAvatar";


function Profile() {
  return (
    <StPaper elevation={0}>
      <StHeader>
        <StAvatar />
        <h1> Navn Navnesen </h1>
      </StHeader>
      <div>
        <p> Equinor </p>
        <p> epost </p>
        <h4> Dine poeng: hallo </h4>
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/updateprofile"
        >
          Oppdater profil
        </Button>
      </div>
{/*       <h1>You are 56% successfull this week.</h1>
      <GaugeChart id="gauge-chart6"
        animate={false}
        nrOfLevels={25}
        percent={0.60}
        needleColor="#345243"
        textColor="black"
      /> */}
    </StPaper>
  );
}

export default Profile;
