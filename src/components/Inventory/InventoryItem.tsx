import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { closetItems } from "../../data/closet";
import { shopItems } from "../../data/shop";
import InventoryItemCard from "./InventoryItemCard";

const InventoryItem = () => {
  const { tab } = useParams();
  const [inventoryItems, setInventoryItems] = useState(closetItems);

  useEffect(() => {
    switch (tab) {
      case "closet":
        setInventoryItems(closetItems);
        break;
      case "shop":
        setInventoryItems(shopItems);
        break;
      default:
        setInventoryItems(closetItems);
        break;
    }
  }, [tab]);

  return (
    <div className="bg-white w-full h-full rounded-b-lg px-2 py-4 overflow-y-auto">
      <div className="grid grid-cols-3 grid-flow-row justify-items-center">
        {inventoryItems.map((item) => (
          <InventoryItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InventoryItem;
