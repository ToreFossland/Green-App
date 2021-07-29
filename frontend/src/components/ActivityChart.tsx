import { stringify } from 'querystring';
import React from 'react';
import { Line } from 'react-chartjs-2';

function ActivityChart(props: any) {
    const month = props.month.toString();
    console.log(month);
    const data = {
        labels: ['1/'+month, '8/'+month, '15/'+month, '22/'+month, '29/'+month,],
        datasets: [
            {
                label: 'Bike to Work',
                data: [12, 3, 18, 14],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Eat a Vegetarian Meal',
                data: [14, 4, 15, 18],
                fill: false,
                backgroundColor: 'rgb(79, 201, 156)',
                borderColor: 'rgba(79, 201, 156, 0.2)',
            }
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
        },
      };

    return (
        <div style={{width: '95%'}}>
            <Line data={data} options={options} />
        </div>
    )
}

export default ActivityChart;
