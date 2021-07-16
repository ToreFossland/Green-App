import { styled, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StBackgroundPaper = styled(withTheme(Paper))(props => ({
    boxShadow: '0px 0px 0px 0px',
    paddingTop: props.theme.spacing(7),
    paddingBottom: props.theme.spacing(8),
    width: '100%',
    //backgroundColor: '#d3d3d3',
}));

export default StBackgroundPaper;