import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InventoryContainer from "../../components/Inventory/InventoryContainer";
import Sidebar from "../home/Sidebar";
import ProfilePreview from "./ProfilePreview";

const Inventory = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");

  useEffect(() => {
    if (!tab || !["closet", "shop"].includes(tab)) {
      navigate("/inventory/closet", { replace: true });
    }

    setActiveCategory("전체");
  }, [tab, navigate]);

  return (
    <>
      <ProfilePreview />
      <InventoryContainer activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Sidebar />
    </>
  );
};

export default Inventory;
