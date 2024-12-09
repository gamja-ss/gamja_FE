import { GoDotFill } from "react-icons/go";
const ProfileDescription = () => {
  return (
    <div className="text-xs mb-[45px]">
      <p className="mt-4 font-semibold">NickName</p>
      <p className="mt-2">Git https://github.com/yoyobar</p>
      <div className="mt-6 flex items-center text-[12px] gap-1">
        <p className="font-semibold">0</p>
        <p className="text-gray-500">팔로워</p>
        <GoDotFill className="text-[5px]" />
        <p className="font-semibold">0</p>
        <p className="text-gray-500">팔로잉</p>
      </div>
    </div>
  );
};

export default ProfileDescription;
