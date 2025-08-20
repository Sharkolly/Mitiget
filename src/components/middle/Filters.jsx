import { IoFilter } from "react-icons/io5";
import Dropdown from "../Dropdown";
import { departments, document_type, tags } from "../../data/data";
import Status from "./Status";
import DatePickerComponent from "./DatePicker";

const Filters = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-56 max-md:w-full">
      <div className="flex gap-1 items-center mb-3">
        <p className="text-lg">Filters</p>
        <span className="text-xl ">
          <IoFilter />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Dropdown type="Document Type" items={document_type} />
        <Dropdown type="Departments" items={departments} />
        <Dropdown type="Tags" items={tags} />
        <Status />
        <DatePickerComponent/>
      </div>
    </div>
  );
};

export default Filters;
