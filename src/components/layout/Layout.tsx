import Header from "./Header";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Layout = () => {
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <>
      <Header />
      <div className="flex py-5 gap-4 font-default h-[calc(100vh-65px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
