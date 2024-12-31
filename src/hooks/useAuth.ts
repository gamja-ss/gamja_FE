import { auth, info } from "../api";
import { useAuthStore, useUserStore } from "../config/store";
import { useCallback, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setAuthStatus = useAuthStore((state) => state.setStatus);
  const { initUser } = useUserStore();

  // 토큰 검증
  const verifyToken = useCallback(async () => {
    try {
      await auth.userTokenVerify();
      return true;
    } catch (error) {
      console.error("토큰 검증 실패:", error);
      return false;
    }
  }, []);

  // 토큰 갱신
  const refreshToken = useCallback(async () => {
    try {
      await auth.userTokenRefresh();
      return true;
    } catch (error) {
      console.error("토큰 갱신 실패:", error);
      return false;
    }
  }, []);

  // 유저 정보 가져오기
  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await info.userInfo();
      initUser(response.data);
      return true;
    } catch (error) {
      console.error("유저 정보 가져오기 실패:", error);
      return false;
    }
  }, [initUser]);

  // 인증 상태 체크
  const checkAuthStatus = useCallback(async () => {
    setIsLoading(true);

    try {
      // 먼저 토큰 검증 시도
      let isValid = await verifyToken();

      // 토큰 검증 실패시 리프레시 시도
      if (!isValid) {
        isValid = await refreshToken();
      }

      // 토큰이 유효하면 유저 정보 가져오기
      if (isValid) {
        await fetchUserInfo();
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    } catch (error) {
      console.error("인증 상태 확인 중 오류:", error);
      setAuthStatus(false);
    } finally {
      setIsLoading(false);
    }
  }, [verifyToken, refreshToken, fetchUserInfo, setAuthStatus]);

  return {
    checkAuthStatus,
    isLoading,
  };
};

export default useAuth;
