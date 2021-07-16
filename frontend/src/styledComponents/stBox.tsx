import { styled, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const StBox = styled(withTheme(Box))(props => ({
    app: {
        textAlign: 'center',
        margin: props.theme.spacing(2), 
        marginTop: 10,
      },
}))

export default StBox;