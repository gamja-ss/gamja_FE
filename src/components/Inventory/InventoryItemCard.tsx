import React from "react";
import { useParams } from "react-router-dom";
import { InventoryItem } from "../../config/type";
import { Coin, Potato } from "../../config/IconData";
import dayjs from "dayjs";

const InventoryItemCard: React.FC<InventoryItem> = ({ ...item }) => {
  const { tab } = useParams();
  const formattedDate = item.date_of_purchase && dayjs(item.date_of_purchase).format("YYYY.MM.DD");
  const buttonStyle = "w-full h-[34px] bg-gray-100 rounded-xl text-sm";

  return (
    <div className="m-2 w-[210px] h-[220px] p-2 border border-gray-200 rounded-xl flex flex-col items-center gap-2">
      <div className="grow flex items-center">
        <Potato width="52" height="66" />
      </div>
      <p className="h-[18px]">{item.name}</p>
      <div className="flex items-center gap-1">
        <Coin width={18} height={18} />
        <span className="h-[18px]">{item.coin}</span>
      </div>
      {tab === "closet" ? (
        <div className={`${buttonStyle} flex items-center justify-center gap-2 text-gray-400`}>
          {`${formattedDate} 획득`}
        </div>
      ) : item.date_of_purchase ? (
        <div className={`${buttonStyle} flex items-center justify-center text-gray-400`}>보유중</div>
      ) : (
        <button className={`${buttonStyle} text-black`}>구매하기</button>
      )}
    </div>
  );
};

export default InventoryItemCard;
