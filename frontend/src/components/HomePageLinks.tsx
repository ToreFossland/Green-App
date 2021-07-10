import React, { FC, useState } from 'react';
import { isAuthenticated } from '../utils/auth';
import StPaper from 'styledComponents/StPaper';

const HomePage: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  // const queryBackend = async () => {
  //   try {
  //     const message = await getMessage();
  //     setMessage(message);
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

  return (
    <div>
      <StPaper>
        <a  href="/admin">
        Admin Dashboard
      </a>
      </StPaper>

      <StPaper>
        <a  href="/profile">
        Profile
      </a>
      </StPaper>

      <StPaper>
        {isAuthenticated() ? (
          <div>
            <a  href="/logout">
              Log out
            </a>
          </div>

        ) : (
          <>
            <a href="/login">
              Login
            </a>
            <a  href="/signup">
              Sign Up
            </a>
          </>
        )}
      </StPaper>


    </div>
  //   {!message && !error && (
    //     <a className={classes.link} href="#" onClick={() => queryBackend()}>
    //       Click to make request to backend
    //     </a>
    //   )}
    //   {message && (
    //     <p>
    //       <code>{message}</code>
    //     </p>
    //   )}
    //   {error && (
    //     <p>
    //       Error: <code>{error}</code>
    //     </p>
    //   )}
  );
};

export default HomePage;