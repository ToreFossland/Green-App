import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StBackgroundColor = styled(withTheme(Paper))(props => ({
    boxShadow: '0px 0px 0px 0px',
    width: '100%',
    marginTop: props.theme.spacing(1),
    marginBottom: props.theme.spacing(1),
    paddingBottom: props.theme.spacing(1),
    backgroundColor: '#F1F1F1',
}));

export default StBackgroundColor;