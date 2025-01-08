import { useNavigate, useParams } from "react-router-dom";
import { Shirt, Shop } from "../../config/IconData";

const TabBtn = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-2">
      <button
        className={`${
          tab === "closet" ? "bg-primary-lightpotato outline outline-primary-potato hover:cursor-auto" : "bg-gray-100"
        } group rounded-xl flex items-center justify-center gap-2 p-3`}
        onClick={() => navigate("/inventory/closet")}
      >
        <Shirt className={`${tab === "closet" ? "fill-black" : "fill-gray-400 group-hover:fill-black"} mt-0.5`} />
        <span
          className={`${
            tab === "closet" ? "text-black" : "text-gray-400 group-hover:text-black"
          } font-YOnepickB text-lg`}
        >
          옷장
        </span>
      </button>
      <button
        className={`${
          tab === "shop" ? "bg-primary-lightpotato outline outline-primary-potato hover:cursor-auto" : "bg-gray-100"
        } group rounded-xl flex items-center justify-center gap-2 p-3`}
        onClick={() => navigate("/inventory/shop")}
      >
        <Shop className={`${tab === "shop" ? "fill-black" : "fill-gray-400 group-hover:fill-black"} mt-0.5`} />
        <span
          className={`${tab === "shop" ? "text-black" : "text-gray-400 group-hover:text-black"} font-YOnepickB text-lg`}
        >
          상점
        </span>
      </button>
    </div>
  );
};

export default TabBtn;
