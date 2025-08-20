const OptionsMenu = ({items}) => {

  return (
       <ul className=" mt-4 w-full border border-gray-400  rounded bg-white shadow-md">
          {items.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-center hover:bg-primary/20 hover:text-black hover:border-r-4  hover:border-primary cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
  )
}

export default OptionsMenu
