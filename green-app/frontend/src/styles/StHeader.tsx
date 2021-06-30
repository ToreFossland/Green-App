import { styled } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import GlobalTheme from "../GlobalTheme";

const theme = GlobalTheme;

const StHeader = styled(Paper) ({
    background: 'white',
    minHeight: theme.spacing(15),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "center",
    color: theme.palette.text.secondary,
});


export default StHeader;