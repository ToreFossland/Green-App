import Paper from "../styles/StPaper";
import Grid from "@material-ui/core/Grid";

export default function FullWidthGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>Akvitet: </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
