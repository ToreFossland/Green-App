import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StBackgroundPaper = styled(withTheme(Paper))(props => ({
    boxShadow: '0px 0px 0px 0px',
    paddingTop: props.theme.spacing(6.5),
    paddingBottom: props.theme.spacing(6.5),
    width: '100%',
    minHeight: '100vh',
    color: props.theme.palette.text.primary,
}));

export default StBackgroundPaper;