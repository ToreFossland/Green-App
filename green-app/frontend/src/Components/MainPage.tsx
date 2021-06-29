import StyledPaper from "../styles/STpaper";
import Grid from "@material-ui/core/Grid";

export default function FullWidthGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>Heihei</StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>xs=12 sm=6</StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>xs=12 sm=6</StyledPaper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <StyledPaper>xs=6 sm=3</StyledPaper>
        </Grid>
      </Grid>
    </div>
  );
}
