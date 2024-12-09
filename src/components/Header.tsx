import { Logo } from "../config/IconData";
import { MdDateRange, MdSearch } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
const Header = () => {
  return (
    <div className="flex items-center px-6 py-3 border-b border-b-gray-100 font-default">
      <div className="flex flex-grow">
        <Logo />
      </div>
      <div className="flex gap-2">
        <button className="flex inset-0 rounded-xl bg-gray-100 w-10 h-10 hover:bg-gray-200">
          <MdDateRange className="m-auto text-2xl" />
        </button>
        <div className="hover:bg-gray-200 cursor-text bg-gray-100 hidden xl:flex rounded-xl w-[354px] items-center pl-4">
          <div className="text-blur select-none">유저 검색</div>
        </div>
        <button className="inset-0 flex xl:hidden rounded-xl bg-gray-100 w-10 h-10 hover:bg-gray-200">
          <MdSearch className="m-auto text-2xl" />
        </button>
        <button className="inset-0 flex rounded-xl bg-gray-100 w-10 h-10 hover:bg-gray-200">
          <TbBell className="m-auto text-2xl" />
        </button>
        <button className="inset-0 flex rounded-xl bg-gray-100 w-10 h-10 hover:bg-gray-200">
          <FiUser className="m-auto text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;