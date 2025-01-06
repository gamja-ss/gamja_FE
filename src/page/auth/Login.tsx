import { Logo } from "../../config/IconData";

const { VITE_GITHUB_CLIENT_ID, VITE_GITHUB_REDIRECT_URI, VITE_GITHUB_SCOPE } = import.meta.env;
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_CLIENT_ID}&redirect_uri=${VITE_GITHUB_REDIRECT_URI}&response_type=code&scope=${VITE_GITHUB_SCOPE}`;

const Login = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center">
        <Logo />
        <p className="mt-[5px] mb-[30px]">당신의 감자를 키워보지 않겠나?</p>
      </div>
      <button
        className="w-[200px] h-[54px] bg-gray-400 hover:bg-gray-500"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = GITHUB_AUTH_URL;
        }}
      >
        GitHub 계정으로 로그인
      </button>
    </div>
  );
};

export default Login;
