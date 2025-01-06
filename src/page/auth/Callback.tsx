import { useLocation, useNavigate } from "react-router-dom";

import { auth } from "../../api";
import useAuth from "../../hooks/useAuth";
import { useAuthStore } from "../../config/store";
import { useEffect } from "react";

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuthStatus } = useAuth();
  const setAuthStatus = useAuthStore((state) => state.setStatus);

  const url = new URLSearchParams(location.search);
  const code = url.get("code");

  useEffect(() => {
    const handleLogin = async () => {
      if (!code) {
        console.error("인가 코드가 없습니다.");
        navigate("/login");
        return;
      }

      try {
        await auth.userLogin(code);
        setAuthStatus(true);
        await checkAuthStatus();
        navigate("/");
      } catch (error) {
        console.error("로그인 실패:", error);
        setAuthStatus(false);
        navigate("/login");
      }
    };
    handleLogin();
  }, [code, navigate, checkAuthStatus, setAuthStatus]);

  return <div>로그인 처리 중...</div>; // 로딩페이지 자리
};

export default Callback;
