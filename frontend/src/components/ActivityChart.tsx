import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from 'state/context';
import * as _ from 'lodash';
import { time } from 'console';

function ActivityChart(props: any) {
    const { state } = useContext(GlobalContext);
    const month = props.month.toString();
    const currentUserActivites =_.filter(state.performsActivities, function(item){
      return item[1].user_id === state.user?.id;
      });
    console.log('activities:', currentUserActivites);

    const data = {
        labels: ['1/'+month, '8/'+month, '15/'+month, '22/'+month, '29/'+month,],
        datasets: [
            {
                label: 'Number of activities',
                data: [12, 3, 18, 14, 9],
                fill: false,
                backgroundColor: 'rgb(143, 188, 143)',
                borderColor: 'rgba(143, 188, 143, 0.2)',
            },
        ],
    };
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              type: 'time',
            },
          ],
        },
      };

    return (
        <div style={{width: '95%'}}>
            <Line data={data} options={options} />
        </div>
    )
}

export default ActivityChart;
