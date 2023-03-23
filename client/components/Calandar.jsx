import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { registerLicense } from "@syncfusion/ej2-base";

// eslint-disable-next-line react/destructuring-assignment
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RgWX9acHNXRWFaUEc="
);

const Calendar = (data) => {
  const [scheduleObj, setScheduleObj] = useState();

  // selectedDate is current date + 1 month
  const selectedDate = new Date();

  function onEventRendered(args) {
    let categoryColor = args.data.CategoryColor;
    args.element.style.backgroundColor = categoryColor;
  }

  return (
    <div className="shadow-xl animate Card max-w-[1240px] mx-auto text-center py-4 bg-white rounded-lg">
      <p className="text-2xl font-bold">What's coming up 🗓️</p>

      {/* add a ledgend */}
      <div className="flex flex-row justify-center">
        <p className="text-xl font-bold m-2">
          Races in{" "}
          <span className="rac-colour"> RAC Maroon are official Races</span>
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-xl font-bold m-2">
          Races in{" "}
          <span className="text-[#246635]"> Green are RAC club runs</span>
        </p>
      </div>

      <div className="m-2 md:m-10 mt-32 p-2 md:p-10 bg-white rounded-3xl">
        <ScheduleComponent
          height="650px"
          allowDragAndDrop={false}
          allowResizing={false}
          readonly={true}
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={selectedDate}
          eventSettings={{ dataSource: data.data }}
          eventRendered={onEventRendered.bind(this)}
        >
          <ViewsDirective>
            {["Month"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Month]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
