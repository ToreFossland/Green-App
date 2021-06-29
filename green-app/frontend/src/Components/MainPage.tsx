import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MyPaper from "../styles/StyledPaper";
import Grid from "@material-ui/core/Grid";



export default function FullWidthGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MyPaper>
            Heihei
          </MyPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
