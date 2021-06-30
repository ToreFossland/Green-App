import ImageAvatars from '../../styles/StAvatar'
import users from "../../Users.json";
//import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import StPaper from '../../styles/StPaper';
import StHeader from '../../styles/StHeader';


function ProfilePage() {

  return (
    <StPaper>
        <StHeader>
            <ImageAvatars/>
            <h3> {users[3].name} </h3>
        </StHeader>
        <div>
          {/* <p> {users[3].company} </p> */}
          <p> {users[3].email} </p>
          <h4> Dine poeng: {users[3].points} </h4>
        </div>

        <div>
            <Button variant="contained" color="primary" component={RouterLink} to="/updateprofile" className="btn btn-primary" >
              Oppdater profil
            </Button>
        </div>
    </StPaper>
  );
}

export default ProfilePage
