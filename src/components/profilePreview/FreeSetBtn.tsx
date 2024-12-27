const FreeSetBtn = () => {
  const buttonStyle =
    "w-[30px] h-[30px] text-sm font-semibold bg-gray-100 rounded-lg text-gray-400 hover:text-white hover:bg-black";
  return (
    <div className="flex flex-col justify-center text-sm font-default gap-1">
      <span className="px-0.5">프리셋</span>
      <div className="flex gap-2 items-center">
        <button className={buttonStyle}>1</button>
        <button className={buttonStyle}>2</button>
        <button className={buttonStyle}>3</button>
      </div>
    </div>
  );
};

export default FreeSetBtn;
