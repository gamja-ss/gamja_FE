const MainChallenge = () => {
  return (
    <div className="flex flex-col w-full select-none bg-white px-4 pb-2 rounded-b-md">
      <div className="flex justify-between items-center text-sm pb-2">
        <div className="font-bold">챌린지</div>
        <div className="text-gray-600 cursor-pointer hover:text-black">전체보기 +</div>
      </div>
      <div className="flex gap-2">
        <div className="w-[222px] h-[280px] bg-gray-100 rounded-xl"></div>
        <div className="w-[222px] h-[280px] bg-gray-100 rounded-xl"></div>
        <div className="w-[222px] h-[280px] bg-gray-100 rounded-xl"></div>
      </div>
    </div>
  );
};

export default MainChallenge;
