import SidebarItem from "../../components/sidebar/SidebarItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <SidebarItem id={0} />
      <SidebarItem id={1} />
      <SidebarItem id={2} />
    </div>
  );
};

export default Sidebar;
