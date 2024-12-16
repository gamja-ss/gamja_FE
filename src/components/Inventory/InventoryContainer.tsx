import InventoryList from "./InventoryList";
import ClosetItem from "./ClosetItem";
import ShopItem from "./ShopItem";
import { useParams } from "react-router-dom";

const InventoryContainer = () => {
  const { tab } = useParams();

  return (
    <div className="px-2 py-2 w-[724px] h-[calc(100vh-112px)] border rounded-xl bg-gray-100 flex flex-col">
      <InventoryList />
      {tab === "closet" && <ClosetItem />}
      {tab === "shop" && <ShopItem />}
    </div>
  );
};

export default InventoryContainer;
