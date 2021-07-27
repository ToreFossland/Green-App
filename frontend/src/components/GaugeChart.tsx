import React from 'react';
import GaugeChart from 'react-gauge-chart';

export const StGaugeChart = (result: any) => {
  let percentage = typeof result.points === 'number' ? result.points / 100 : 0;
  return (
    <div>
      <h3>You are {percentage * 100 + '%'} successful this week.</h3>
      <GaugeChart
        id="gauge-chart6"
        animate={false}
        nrOfLevels={3}
        colors={['#ffdb83', '#8FBC8F']}
        percent={percentage}
        needleColor="#00000"
        textColor="black"
      />
    </div>
  );
};
