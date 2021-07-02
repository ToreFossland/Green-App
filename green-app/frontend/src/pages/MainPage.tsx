import StPaper from "../styles/StPaper";
import Grid from "@material-ui/core/Grid";

export default function FullWidthGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StPaper>Heihei</StPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StPaper>xs=12 sm=6</StPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StPaper>xs=12 sm=6</StPaper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <StPaper>xs=6 sm=3</StPaper>
        </Grid>
      </Grid>
    </div>
  );
}
