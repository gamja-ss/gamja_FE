import { PotatoProfile } from "../../config/IconData";
import bg_grass from "../../assets/icon/bg_grass.svg";

const ProfilePreviewImg = () => {
  return (
    <div className="relative outline outline-gray-100 w-[314px] h-[314px] rounded-xl">
      <PotatoProfile className="absolute z-10" />
      <img src={bg_grass} className="absolute" />
    </div>
  );
};

export default ProfilePreviewImg;
