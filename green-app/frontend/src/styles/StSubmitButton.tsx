import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GlobalTheme from "../GlobalTheme";

const theme = GlobalTheme;

const MySubmitButton = styled(Button)({
  margin: theme.spacing(3, 0, 2),
});

export default function styledSubmitButton(){
  const linkTo = "";
  return <MySubmitButton> </MySubmitButton>
}
