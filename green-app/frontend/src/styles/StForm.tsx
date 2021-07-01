import { styled } from '@material-ui/core/styles';
import Form from '@material-ui/core/Avatar';
import GlobalTheme from '../GlobalTheme';

const theme = GlobalTheme;

const MyForm = styled(Form) ({
    width: "100%",
    marginTop: theme.spacing(3),
});


export default MyForm;