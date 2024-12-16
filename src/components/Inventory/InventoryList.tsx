const InventoryList = () => {
  const buttonStyle =
    "w-[72px] h-[34px] p-2 rounded-t-lg text-xs font-YOnepick text-gray-400 bg-gray-200 hover:text-black hover:bg-white";
  return (
    <div className="flex items-center gap-1">
      <button className={buttonStyle}>전체</button>
      <button className={buttonStyle}>헤어</button>
      <button className={buttonStyle}>의류</button>
      <button className={buttonStyle}>악세사리</button>
      <button className={buttonStyle}>스킨</button>
      <button className={buttonStyle}>배경</button>
    </div>
  );
};

export default InventoryList;
