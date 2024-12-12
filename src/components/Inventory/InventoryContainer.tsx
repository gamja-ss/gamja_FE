import InventoryItem from "./InventoryItem";
import InventoryList from "./InventoryList";
import ShopItem from "./ShopItem";

const InventoryContainer = () => {
  return (
    <div className="px-2 py-2 w-[724px] h-[calc(100vh-112px)] border rounded-xl bg-gray-100 flex flex-col">
      <InventoryList />
      <InventoryItem />
      <ShopItem />
    </div>
  );
};

export default InventoryContainer;
