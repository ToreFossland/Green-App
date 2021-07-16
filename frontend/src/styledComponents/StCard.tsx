import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StCard = styled(Card)({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
});

export default StCard;
