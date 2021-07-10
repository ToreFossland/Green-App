import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const StBackgroundPaper = styled(Paper)({
    boxShadow: '0px 0px 0px 0px',
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(8),
    width: '100%',
    //backgroundColor: '#d3d3d3',
});

export default StBackgroundPaper;