import { useParams } from "react-router-dom";
import { Coin, Potato } from "../../config/IconData";

const SaveBtn = () => {
  const { tab } = useParams();

  return (
    <div className="flex gap-3">
      <button className="group w-[49px] h-[49px] p-1 border border-gray-200 bg-gray-100 flex items-center justify-center rounded-xl">
        <Potato className="group-hover:scale-115" />
      </button>
      {tab === "closet" ? (
        <button className="grow hover:text-lg border text-white bg-black rounded-xl flex items-center justify-center">
          저장하기
        </button>
      ) : (
        <div className="grow flex items-center justify-center gap-2 border rounded-xl">
          <Coin />
          <span className="h-[24px] text-xl">200</span>
        </div>
      )}
    </div>
  );
};

export default SaveBtn;
