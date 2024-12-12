import TabBtn from "../../components/profilePreview/TabBtn";
import FreeSetBtn from "../../components/profilePreview/FreeSetBtn";
import ProfilePreviewImg from "../../components/profilePreview/ProfilePreviewImg";
import SaveBtn from "../../components/profilePreview/SaveBtn";

const ProfilePreview = () => {
  return (
    <div className="w-[354px] h-[500px] border rounded-xl flex flex-col p-5">
      <TabBtn />
      <FreeSetBtn />
      <ProfilePreviewImg />
      <SaveBtn />
    </div>
  );
};

export default ProfilePreview;
