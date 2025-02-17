import { useNavigate } from "react-router-dom";
import { Shirt } from "../../config/IconData";

const ProfileImage = () => {
  const navigate = useNavigate();

  const moveToInventoryHandler = () => {
    navigate("/inventory/closet");
  };

  return (
    <div className="relative w-[314px] h-[314px] rounded-xl border border-gray-100">
      <div className="flex justify-between">
        <div>
          <button
            className="absolute right-0 group w-[42px] h-[50px] bg-gray-100 hover:bg-gray-200 rounded-lg m-2 flex flex-col justify-center items-center"
            onClick={moveToInventoryHandler}
          >
            <Shirt className="fill-gray-400 group-hover:fill-black" />
            <p className="text-[10px] text-gray-400 group-hover:text-black">꾸미기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
