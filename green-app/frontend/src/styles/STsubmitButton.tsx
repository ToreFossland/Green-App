import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GlobalTheme from "../globalTheme";

const theme = GlobalTheme;

const MySubmitButton = styled(Button)({
  margin: theme.spacing(3, 0, 2),
});

export default MySubmitButton;
