import Card from '@material-ui/core/Card';
import { styled, withTheme } from '@material-ui/core';

const StCard = styled(withTheme(Card))(props => ({
  paddingTop: props.theme.spacing(2),
  paddingBottom: props.theme.spacing(2),
  marginTop: props.theme.spacing(1),
  marginBottom: props.theme.spacing(1),
}));

export default StCard;
