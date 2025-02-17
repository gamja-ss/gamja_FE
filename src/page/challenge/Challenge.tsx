import Sidebar from "./Sidebar";
import Profile from "./Profile";
import MainRoute from "../../components/main/MainRoute";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

const Challenge = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex gap-4 min-w-[1440px] mx-auto">
      <div className="w-1/4">
        <Profile />
      </div>
      <div className="w-2/4">
        <div className="px-2 pt-2 pb-8 flex-2 rounded-xl bg-gray-100 flex flex-col">
          <MainRoute />
          <div className="bg-white">
            <div className="p-5 border-b-2 border-gray-100">
              <p className="font-bold">챌린지</p>
              <p className="text-gray-600 mb-3">챌린지를 통해 성장하고 코인을 획득할 수 있습니다.</p>
              <div className="flex gap-2 w-full -mx-1">
                {/* 깃 커밋 챌린지 버튼 */}
                <button
                  type="button"
                  className="p-4 flex rounded-xl justify-between w-1/2 bg-gray-100 text-start hover:bg-gray-200 transition"
                >
                  <div>
                    <p className="font-YOnepickB text-lg mb-3">깃 커밋 챌린지</p>
                    <p className="text-gray-600">
                      기간을 정해 꾸준히 <br /> 커밋을 채워봐요.
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-lg bg-white"></div>
                </button>
                {/* 문제풀기 챌린지 버튼 */}
                <button
                  type="button"
                  className="p-4 flex rounded-xl justify-between w-1/2 bg-gray-100 text-start hover:bg-gray-200 transition"
                >
                  <div>
                    <p className="font-YOnepickB text-lg mb-3">문제풀기 챌린지</p>
                    <p className="text-gray-600">
                      누가 더 많은 문제를 풀까요? <br /> 문제를 해결하고 성장해요!
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-lg bg-white"></div>
                </button>
              </div>
            </div>
            <div className="p-5">
              <p className="font-bold">챌린지 목록</p>
              {/* 챌린지 목록 탭 */}
              <div className="-mx-1 flex gap-1 mt-2">
                <button
                  type="button"
                  onClick={() => handleTabChange("all")}
                  className={`rounded-lg py-2 px-4 ${activeTab === "all" ? "bg-gray-200 text-black font-bold" : "bg-gray-100"}`}
                >
                  모두
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("requesting")}
                  className={`rounded-lg py-2 px-4 ${activeTab === "requesting" ? "bg-gray-200 text-black font-bold" : "bg-gray-100"}`}
                >
                  요청중
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("progressing")}
                  className={`rounded-lg py-2 px-4 ${activeTab === "progressing" ? "bg-gray-200 text-black font-bold" : "bg-gray-100"}`}
                >
                  진행중
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("ended")}
                  className={`rounded-lg py-2 px-4 ${activeTab === "ended" ? "bg-gray-200 text-black font-bold" : "bg-gray-100"}`}
                >
                  종료됨
                </button>
              </div>
              {/* 챌린지 내용 카드 */}
              <div className="flex py-5 -mx-1 gap-2">
                <div className="p-5 bg-primary rounded-xl w-1/2">
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-YOnepickB">깃 커밋 챌린지</p>
                    <button type="button">
                      <FiPlusCircle className="w-6 h-6" />
                    </button>
                  </div>
                  {/* 기간 */}
                  <p className="font-bold">챌린지 기간</p>
                  <div className="flex gap-3 items-center mt-2 mb-1">
                    <div className="bg-black text-white py-1 px-2 rounded-xl">시작</div>
                    <p>2024 11월 07일 00:00</p>
                  </div>
                  <div className="flex gap-3 items-center mt-2 mb-1">
                    <div className="bg-black text-white py-1 px-2 rounded-xl">종료</div>
                    <p>2024 11월 14일 00:00</p>
                  </div>
                  {/* 참여자 목록 */}
                  <div className="mb-9">
                    <p className="font-bold mt-4">참여자</p>
                    <div className="flex mt-2">
                      <div className="w-10 h-10 rounded-full border border-black bg-white relative group hover:scale-105 transition-all">
                        <p className="text-sm absolute top-full left-1/2 -translate-x-1/2 truncate text-center transition-all invisible group-hover:visible">
                          참여자
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-black bg-white relative group hover:scale-105 transition-all -ms-2">
                        <p className="text-sm absolute top-full left-1/2 -translate-x-1/2 truncate text-center transition-all invisible group-hover:visible">
                          참여자
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      className="py-3 px-5 bg-black hover:bg-gray-800 transition-all text-white rounded-xl flex justify-between w-1/2 text-start font-bold"
                    >
                      <p>참가</p>
                      <BsCheckCircleFill className="w-6 h-6 -me-1" />
                    </button>
                    <button
                      type="button"
                      className="py-3 px-5 bg-gray-600 hover:bg-gray-500 transition-all text-white rounded-xl flex justify-between w-1/2 text-start font-bold"
                    >
                      <p>거절</p>
                      <AiFillCloseCircle className="w-6 h-6 -me-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Challenge;
