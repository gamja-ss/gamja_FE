import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InventoryContainer from "../../components/Inventory/InventoryContainer";
import Sidebar from "../home/Sidebar";
import ProfilePreview from "./ProfilePreview";

const Inventory = () => {
  const { tab } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tab || !["closet", "shop"].includes(tab)) {
      navigate("/inventory/closet", { replace: true });
    }
  }, [tab, navigate]);

  return (
    <>
      <ProfilePreview />
      <InventoryContainer />
      <Sidebar />
    </>
  );
};

export default Inventory;
