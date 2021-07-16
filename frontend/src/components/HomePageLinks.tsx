import React, { FC, useState } from 'react';
import { isAuthenticated } from '../utils/auth';
import StPaper from 'styledComponents/StPaper';

const HomePage: FC = () => {

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
  );
};

export default HomePage;