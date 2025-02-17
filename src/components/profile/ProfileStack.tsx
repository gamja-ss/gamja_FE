import { LuPencil } from "react-icons/lu";
const ProfileStack = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="font-semibold">Stack</div>
        <button
          type="button"
          aria-label="Edit stack button"
          title="Edit Stack"
          className="group w-6 h-6 bg-gray-100 rounded-md inset-0 hover:bg-gray-200"
        >
          <LuPencil className="m-auto text-gray-400 group-hover:text-black" />
        </button>
      </div>
      <div className="flex flex-wrap gap-1 font-semibold text-sm mt-1">
        <span className="bg-[#FFEF41] py-2 px-3 rounded-lg">Javascript</span>
        <span className="bg-[#3FF9FF] py-2 px-3 rounded-lg">React</span>
      </div>
    </>
  );
};

export default ProfileStack;
