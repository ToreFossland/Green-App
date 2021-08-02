import { styled, withTheme } from '@material-ui/core/styles';
import { ChallengeListItem } from 'components/ChallengeListItem';

const StChallengeListItem = styled(withTheme(ChallengeListItem))((props) => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default StChallengeListItem;
