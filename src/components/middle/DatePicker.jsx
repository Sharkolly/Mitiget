import { useState } from "react";
import DatePicker from "react-datepicker";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        popperPlacement="end" 
        className=" rounded px-2 py-1"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePickerComponent;
