import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ items, type }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");

  return (
    <div className="relative w-48 max-md:w-full">
      {type && <p className='my-2'>{type}</p>}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-2 border rounded bg-white text-gray-700 hover:border-primary"
      >
        {selected}
        <ChevronDown size={18} className="text-gray-500" />
      </button>
      {open && (
        <ul className={`${!type && 'absolute'  } mt-4 w-full border rounded bg-white shadow-md`}>
          {items.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="p-2 py-1 hover:bg-primary/20 hover:text-black hover:border-r-4  hover:border-primary cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
