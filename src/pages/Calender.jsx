import React from 'react';
import {Header} from "../componets";
import {
  Agenda,
  Day,
  DragAndDrop,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek
} from "@syncfusion/ej2-react-schedule";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";
import {scheduleData} from "../data/dummy";

const Calender = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calender" category="App"/>
      <ScheduleComponent
        height="550px"
        eventSettings={{dataSource: scheduleData}}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender;