import React from 'react';
import GaugeChart from 'react-gauge-chart';

export const StGaugeChart = (result: any) => {
  let percentage = typeof result.points === 'number' ? result.points / 200 : 0;
  percentage = (percentage < 0 && 0) || (percentage > 1 && 1) || percentage;
  return (
    <div>
      <h3>Keep up the good work! </h3>
      <GaugeChart
        id="gauge-chart6"
        animate={false}
        nrOfLevels={3}
        colors={['#f9f871', '#91e180', '#0fc198']}
        percent={percentage}
        needleColor="#00000"
        textColor="black"
      />
    </div>
  );
};
