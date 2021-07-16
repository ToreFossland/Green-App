import React from 'react';
import GaugeChart from 'react-gauge-chart';

export const StGaugeChart = () => {
  return (
    <div>
      <h2>You are 60% successful this week.</h2>
      <GaugeChart
        id="gauge-chart6"
        animate={false}
        nrOfLevels={3}
        colors={['#ffdb83', '#8FBC8F']}
        percent={0.6}
        needleColor="#00000"
        textColor="black"
      />
    </div>
  );
};
