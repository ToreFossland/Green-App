import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GlobalContext } from 'state/context';
import GlobalTheme from 'GlobalTheme';
import * as _ from 'lodash';

function ActivityChart(props: any) {
    const { state } = useContext(GlobalContext);
    const theme = GlobalTheme;
    const strokeColor = theme.palette.primary.main;
    const month = props.month.toString();
    const currentUserActivites =_.filter(state.performsActivities, function(item){
      return item[1].user_id === state.user?.id;
      });

    let numberOfActivities = [0, 0, 0, 0, 0];

    currentUserActivites.forEach(function( item ){
      let timestamp : number = +item[1].date;
      let date : Date = new Date(timestamp);
      let day = date.getDate();
      if(day < 8){
        numberOfActivities[0]++
      }else if(day < 15){
        numberOfActivities[1]++
      }else if(day < 22){
        numberOfActivities[2]++
      }else if(day < 29){
        numberOfActivities[3]++
      }else{
        numberOfActivities[4]++
      }
    });

    const data = [
        {
          name: '1/'+month,
          numberOfActivities: numberOfActivities[0],
        },
        {
          name: '8/'+month,
          numberOfActivities: numberOfActivities[1],
        },
        {
          name: '15/'+month,
          numberOfActivities: numberOfActivities[2],
        },
        {
          name: '22/'+month,
          numberOfActivities: numberOfActivities[3],
        },
        {
          name: '29/'+month,
          numberOfActivities: numberOfActivities[4],
        },
      ];

    return (
        <ResponsiveContainer width= '95%' height={250} >
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: -35,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" scale="point" />
                <YAxis interval="preserveStartEnd" allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="numberOfActivities" isAnimationActive={false} stroke={strokeColor} strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default ActivityChart;
