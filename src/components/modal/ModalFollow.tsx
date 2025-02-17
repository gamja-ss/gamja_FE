import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { Search } from "../../config/IconData";
import { searchUser } from "../../api/follow";

interface ModalFollowProps {
  onClose: () => void;
}

interface SearchResult {
  id: number;
  is_following: boolean;
  nickname: string;
  user_tier: string;
}

const ModalFollow = ({ onClose }: ModalFollowProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState("search"); // 현재 선택된 탭 ("all", "following", "followers")
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  // 컴포넌트가 마운트되었을 때 input에 포커스
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 이벤트 핸들러: 배경 클릭 시 모달 닫기
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // 유저 검색
  const handleSearchUser = async (nickname: string) => {
    try {
      const data = await searchUser(nickname);
      setSearchResult(data[0]);
      console.log(searchResult);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearch = () => {
    handleTabChange("search");
    handleSearchUser(searchInput);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-10 font-default"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-5 rounded-xl w-full sm:w-[394px]">
        <div className="flex items-center mb-6">
          <h2 className="font-medium">유저 검색</h2>
          <button
            className="ms-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            onClick={onClose}
          >
            <FiX className="text-2xl" />
          </button>
        </div>
        <div className="relative mb-4">
          <input
            ref={inputRef}
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            className="bg-gray-100 w-full rounded-xl py-3 px-4 hover:bg-gray-200 transition"
            placeholder="유저를 검색하세요"
          />
          <button
            onClick={handleSearch}
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-all"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        {/* 탭 메뉴 */}
        <div className="flex border-b">
          <button
            className={`flex-1 text-center py-2 ${
              activeTab === "search" ? "border-b-2 border-black font-semibold" : "text-gray-400"
            }`}
            onClick={() => handleTabChange("search")}
          >
            검색
          </button>
          <button
            className={`flex-1 text-center py-2 ${
              activeTab === "following" ? "border-b-2 border-black font-semibold" : "text-gray-400"
            }`}
            onClick={() => handleTabChange("following")}
          >
            팔로잉
          </button>
          <button
            className={`flex-1 text-center py-2 ${
              activeTab === "followers" ? "border-b-2 border-black font-semibold" : "text-gray-400"
            }`}
            onClick={() => handleTabChange("followers")}
          >
            팔로워
          </button>
        </div>

        <div className="h-screen sm:h-96 overflow-y-auto">
          {activeTab === "search" && searchResult && (
            <div>
              {/* "모두" 탭 내용 */}

              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div className="flex gap-2">
                    <p className="font-medium">{searchResult.nickname}</p>
                    <p className="text-sm text-gray-500">{searchResult.user_tier}</p>
                  </div>
                </div>
                <button
                  className={`px-3 py-1 rounded-lg text-sm ${
                    searchResult.is_following ? "bg-gray-200 text-gray-400" : "bg-black text-white"
                  }`}
                >
                  {searchResult.is_following ? "팔로잉" : "팔로우"}
                </button>
              </div>
            </div>
          )}
          {activeTab === "following" && (
            <div>
              {/* "팔로잉" 탭 내용 */}
              <p>팔로잉 사용자 목록</p>
            </div>
          )}
          {activeTab === "followers" && (
            <div>
              {/* "팔로워" 탭 내용 */}
              <p>팔로워 사용자 목록</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalFollow;
