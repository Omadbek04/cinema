import { Link } from "react-router-dom";
import dropdown from "../assets/dropdown-arrow-svgrepo-com.svg";
const Dropdown = ({ title, items, isOpen, setIsOpen }) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative z-10">
      <button onClick={toggleDropdown} className=" flex items-center gap-2 text-white text-[20px] hover:text-stone-300 md:text-gray-300 tracking-widest md:hover:text-gray-200">
        <span>{title}</span>
        <img src={dropdown} alt="dropdown" className=" pt-1.5" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-slate-900 border border-gray-800 rounded-lg shadow-lg z-10">
          {items.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="block px-4 py-2 text-white hover:bg-gray-800 rounded-lg" onClick={() => setIsOpen(false)}>
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
