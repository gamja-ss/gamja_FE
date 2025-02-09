import ProfileDescription from "../../components/profile/ProfileDescription";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileStack from "../../components/profile/ProfileStack";

const Profile = () => {
  return (
    <div>
      <div className="flex-1 border rounded-xl flex flex-col p-5">
        <ProfileImage />
        <ProfileDescription />
        <ProfileStack />
      </div>
    </div>
  );
};

export default Profile;
