import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex my-4 gap-4 justify-center min-w-[1900px] font-default">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
