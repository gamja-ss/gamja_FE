import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "./InventoryList";
import InventoryItemCard from "./InventoryItemCard";
import { InventoryProps } from "../../config/type";
import { closetItems } from "../../data/closet";
import { shopItems } from "../../data/shop";

const InventoryContainer = ({ activeCategory, setActiveCategory }: InventoryProps) => {
  const { tab } = useParams();
  const [inventoryItems, setInventoryItems] = useState(closetItems);

  useEffect(() => {
    const items = tab === "closet" ? closetItems : shopItems;
    setInventoryItems(items);
  }, [tab]);

  return (
    <div className="px-2 py-2 w-[724px] h-[calc(100vh-112px)] border rounded-xl bg-gray-100 flex flex-col">
      <InventoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="bg-white w-full h-full rounded-b-lg px-2 py-4 overflow-y-auto">
        <div className="grid grid-cols-3 grid-flow-row justify-items-center">
          {inventoryItems.map((item) => (
            <InventoryItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryContainer;
