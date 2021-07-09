import React from "react";
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';

export const EditButton=()=>{
    return(
        <IconButton
        color="primary"
        component={RouterLink}
        to="/updateprofile"
        >
        <EditIcon style={{ fontSize: 35 }} />
        </IconButton>
        )
    }