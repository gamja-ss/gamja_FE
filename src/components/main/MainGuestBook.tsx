const MainGuestBook = () => {
  return (
    <div className="flex flex-col w-1/2 select-none">
      <div className="flex justify-between items-center text-[12px] pb-2">
        <div className="font-bold">방명록</div>
        <div className="text-gray-600 cursor-pointer hover:text-black">전체보기 +</div>
      </div>
      <div className="w-full h-[192px] bg-gray-100 rounded-xl"></div>
    </div>
  );
};

export default MainGuestBook;
