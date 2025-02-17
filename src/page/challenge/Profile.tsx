import ProfileDescription from "../../components/profile/ProfileDescription";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileStack from "../../components/profile/ProfileStack";

const Profile = () => {
  return (
    <div className="w-full border rounded-xl flex flex-col p-5">
      <ProfileImage />
      <ProfileDescription />
      <ProfileStack />
    </div>
  );
};

export default Profile;
