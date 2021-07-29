import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from 'state/context';
import { updateUserPassword } from 'utils/auth';
import { user } from 'state/user/userActions';
import {getUser} from 'utils/user';
import ChangePasswordForm from 'forms/ChangePasswordForm';

function ChangePasswordPage() {
    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPasswordConfimation, setNewPasswordConfirmation] = useState<string>('');
    const [error, setError] = useState<string>('');
    const userID = state.user?.id;
    const email = state.user?.email!;

    const PasswordChange = async (_: React.MouseEvent) => {
        setError('');

        if (newPassword !== newPasswordConfimation) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        try {
            const data = await updateUserPassword(userID, email, newPassword);

            if (data) {
                const myUser = await getUser();
                dispatch(user(myUser));
                history.push('/profile');
            }
        } catch (err) {
            if (err instanceof Error) {
                // handle errors thrown from frontend
                setError(err.message);
            } else {
                // handle errors thrown from backend
                setError(err);
            }
        }
    };


    return (
        <ChangePasswordForm
            error={error}
            onNewPasswordChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassword(e.currentTarget.value)}
            onNewPasswordConfirmationChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPasswordConfirmation(e.currentTarget.value)}
            onSubmitButtonClick = {PasswordChange}
        />
    )
}

export default ChangePasswordPage;