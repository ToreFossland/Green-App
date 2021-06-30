import ImageAvatars from '../../styles/StAvatar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import StPaper from '../../styles/StPaper';
import StHeader from '../../styles/StHeader';


function UpdateProfile() {
    return (
        <StPaper>
            <StHeader>
                <ImageAvatars/>
                <div>
                    <form noValidate autoComplete="off">
                    <TextField id="changeFirstName" label={'first name'} variant="outlined" />
                    <TextField id="changeLastName" label={'last name'} variant="outlined" />
                    </form>
                </div>
            </StHeader>
            <StHeader>
              <Button variant="contained" color='primary' onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Lagre
              </Button>

              <Button variant="contained" onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Endre passord
              </Button>

              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Slett bruker
              </Button>
            </StHeader>


        </StPaper>
    )
}

export default UpdateProfile
