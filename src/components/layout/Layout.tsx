import Header from "./Header";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Layout = () => {
  const { checkAuthStatus, isLoading } = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩페이지 자리
  }

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
