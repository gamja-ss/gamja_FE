import TabBtn from "../../components/profilePreview/TabBtn";
import FreeSetBtn from "../../components/profilePreview/FreeSetBtn";
import ProfilePreviewImg from "../../components/profilePreview/ProfilePreviewImg";
import SaveBtn from "../../components/profilePreview/SaveBtn";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePreview = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  return (
    <div className="flex flex-col gap-3">
      <TabBtn />
      <div className="w-[354px] border rounded-xl flex flex-col p-5 gap-3">
        {tab === "closet" && <FreeSetBtn />}
        <ProfilePreviewImg />
        <SaveBtn />
      </div>
      <button
        className="flex items-center justify-center gap-2 text-gray-400 bg-gray-100 hover:text-black rounded-xl h-[49px]"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft size={14} />
        <span className="h-[22px]">홈으로 이동</span>
      </button>
    </div>
  );
};

export default ProfilePreview;
