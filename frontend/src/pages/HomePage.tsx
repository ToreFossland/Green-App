import React from 'react';
import SocialGrid from 'components/SocialGrid';
import HomePageLinks from 'components/HomePageLinks';
import ActivityTabs from 'components/ActivityTabs';

const HomePage = () => {
  return (
    <div>
      <HomePageLinks />
      <ActivityTabs/>
    </div>
  );
};

export default HomePage;
