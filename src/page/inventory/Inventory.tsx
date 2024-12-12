import InventoryContainer from "../../components/Inventory/InventoryContainer";
import Sidebar from "../home/Sidebar";
import ProfilePreview from "./ProfilePreview";

const Inventory = () => {
  return (
    <>
      <ProfilePreview />
      <InventoryContainer />
      <Sidebar />
    </>
  );
};

export default Inventory;
