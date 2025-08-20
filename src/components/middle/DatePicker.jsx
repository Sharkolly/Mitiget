import DatePicker from "react-datepicker";

const DatePickerComponent = () => {
  return (
    <div>
      <div className="w-full mt-3">
        <label className="block mb-1">Effective Date</label>
        <input
          type="date"
          className="border border-gray-300 rounded-md p-2 w-full max-w-sm text-primary"
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
