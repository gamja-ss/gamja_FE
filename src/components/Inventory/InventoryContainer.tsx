import InventoryList from "./InventoryList";
import InventoryItem from "./InventoryItem";

const InventoryContainer = () => {
  return (
    <div className="px-2 py-2 w-[724px] h-[calc(100vh-112px)] border rounded-xl bg-gray-100 flex flex-col">
      <InventoryList />
      <InventoryItem />
    </div>
  );
};

export default InventoryContainer;
