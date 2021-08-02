import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from 'state/context';
import GlobalTheme from 'GlobalTheme';
import * as _ from 'lodash';

function ActivityChart(props: any) {
    const { state } = useContext(GlobalContext);
    const theme = GlobalTheme;
    const strokeColor = theme.palette.info.main;
    const dotColor = theme.palette.primary.main;
    const month = props.month.toString();
    const currentUserActivites =_.filter(state.performsActivities, function(item){
      return item[1].user_id === state.user?.id;
      });

    let numberOfActivities = [0, 0, 0, 0, 0, 0];

    currentUserActivites.forEach(function( item ){
      let timestamp : number = +item[1].date;
      let date : Date = new Date(timestamp);
      let day = date.getDate();
      if(day < 8){
        numberOfActivities[1]++
      }else if(day < 15){
        numberOfActivities[2]++
      }else if(day < 22){
        numberOfActivities[3]++
      }else if(day < 29){
        numberOfActivities[4]++
      }else{
        numberOfActivities[5]++
      }
    });

    const data = {
        labels: ['1/'+month, '8/'+month, '15/'+month, '22/'+month, '29/'+month,],
        datasets: [
            {
                label: 'Number of activities',
                data: numberOfActivities,
                fill: false,
                backgroundColor: dotColor,
                borderColor: strokeColor,
            },
        ],
    };
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision: 0,
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
