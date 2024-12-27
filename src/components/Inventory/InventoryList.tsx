import { InventoryProps } from "../../config/type";

const InventoryList = ({ activeCategory, setActiveCategory }: InventoryProps) => {
  const categories = ["전체", "헤어", "의류", "악세사리", "스킨", "배경"];

  return (
    <div className="flex items-center gap-1">
      {categories.map((category) => (
        <button
          key={category}
          className={`w-[72px] h-[34px] p-2 rounded-t-lg text-xs font-YOnepickR ${
            activeCategory === category ? "text-black bg-white" : "text-gray-400 bg-gray-200 hover:text-black"
          }`}
          onClick={() => setActiveCategory(category)}
          disabled={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default InventoryList;
