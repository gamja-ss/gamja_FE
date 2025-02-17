import { GoDotFill } from "react-icons/go";
import { useUserStore } from "../../config/store";
const ProfileDescription = () => {
  const { user } = useUserStore();
  return (
    <div className="mb-[45px]">
      <p className="mt-4 font-semibold">{user.nickname}</p>
      <p className="mt-1">{user.user_tier}</p>
      <div className="mt-6 flex items-center text-sm gap-1">
        <p className="font-semibold">{user.followers_count}</p>
        <p className="text-gray-500">팔로워</p>
        <GoDotFill className="text-[5px]" />
        <p className="font-semibold">{user.following_count}</p>
        <p className="text-gray-500">팔로잉</p>
      </div>
    </div>
  );
};

export default ProfileDescription;
