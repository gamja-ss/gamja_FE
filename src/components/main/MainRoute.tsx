import { useLocation, useNavigate } from "react-router-dom";
import { twMerge as tw } from "tailwind-merge";

const MainRoute = () => {
  const { pathname } = useLocation();
  const router = useNavigate();
  return (
    <div className="flex gap-1 select-none text-sm">
      <button
        onClick={() => router("/")}
        className={tw(
          "w-[72px] h-[34px] rounded-t-xl bg-gray-200 hover:bg-white text-gray-500 hover:text-black",
          pathname === "/" && "bg-white text-black"
        )}
      >
        홈
      </button>
      <button
        onClick={() => router("/TIL")}
        className={tw(
          "w-[72px] h-[34px] rounded-t-xl bg-gray-200 hover:bg-white text-gray-500 hover:text-black",
          pathname === "/TIL" && "bg-white text-black"
        )}
      >
        TIL
      </button>
      <button
        onClick={() => router("/challenge")}
        className={tw(
          "w-[72px] h-[34px] rounded-t-xl bg-gray-200 hover:bg-white text-gray-500 hover:text-black",
          pathname === "/challenge" && "bg-white text-black"
        )}
      >
        대결
      </button>
      <button
        onClick={() => router("/guestbook")}
        className={tw(
          "w-[72px] h-[34px] rounded-t-xl bg-gray-200 hover:bg-white text-gray-500 hover:text-black",
          pathname === "/guestbook" && "bg-white text-black"
        )}
      >
        방명록
      </button>
    </div>
  );
};

export default MainRoute;
