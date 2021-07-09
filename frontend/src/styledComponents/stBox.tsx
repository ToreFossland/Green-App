import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GlobalTheme from 'GlobalTheme';
const theme = GlobalTheme;

const StBox = styled(Box)({
    app: {
        textAlign: 'center',
        margin: theme.spacing(2), 
        marginTop: 10,
      },
})

export default StBox;