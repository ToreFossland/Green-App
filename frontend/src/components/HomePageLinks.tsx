import React, { FC } from 'react';
import StPaper from 'styledComponents/StPaper';

const HomePageLinks: FC = () => {

  return (
    <div>
      <StPaper>
        <a  href="/admin">
        Admin Dashboard
      </a>
      </StPaper>
    </div>
  );
};

export default HomePageLinks;