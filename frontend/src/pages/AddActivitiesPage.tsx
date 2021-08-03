import React from 'react';
import { ActivityListItem } from '../components/ActivityListItem';
import StPaper from '../styledComponents/StPaper';
import Calendar from '../components/Calendar';
import { GlobalContext } from 'state/context';
import StList from 'styledComponents/StList';
export default function AddActivities() {
  const { state } = React.useContext(GlobalContext);
  const activities = state?.activities;
  console.log(activities);
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  return (
    <div>
      <StPaper elevation={0}>
        <Calendar
          date={selectedDate}
          onChangeDate={(newDate: Date) => {
            setSelectedDate(newDate);
          }}
        />
        </StPaper>
        <StList>
          {activities?.map((item: any, index: number) => (
            <ActivityListItem
              key={item.id}
              id={item.id}
              points={item.points}
              name={item.name}
              date={selectedDate}
              index={index}
            />
          ))}
        </StList>
    </div>
  );
}
