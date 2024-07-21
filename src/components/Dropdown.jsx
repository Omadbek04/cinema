import { Link } from "react-router-dom";
import dropdown from "../assets/dropdown-arrow-svgrepo-com.svg";
const Dropdown = ({ title, items, isOpen, setIsOpen }) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative z-10 w-full">
      <button onClick={toggleDropdown} className=" w-full flex items-center gap-2 text-white text-[20px] hover:text-stone-300 md:text-gray-300 tracking-widest md:hover:text-gray-200">
        <span>{title}</span>
        <img src={dropdown} alt="dropdown" className=" pt-1.5" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2  bg-transparent backdrop-blur-sm md:w-44 w-full bg-slate-900 border border-white rounded-lg shadow-lg z-10">
          {items.map((item) => (
            <li key={item.id} >
              <Link to={item.link} className={`block px-4 py-2 text-white border-b  border-transparent hover:border-white rounded-2xl`} onClick={() => setIsOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
