import { auth } from "../api";
import { useCallback } from "react";
import { useState } from "react";

const useVerify = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 리프레쉬로 액세스 발급받기
  const refreshToken = useCallback(async () => {
    try {
      await auth.userTokenRefresh();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("token is not Invalid", error);
    }
  }, []);

  // 액세스가 유효한가 확인
  const verifyToken = useCallback(async () => {
    try {
      await auth.userTokenVerify();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("token is not Verified", error);
    }
  }, []);

  return { refreshToken, verifyToken, isLoggedIn };
};

export default useVerify;
