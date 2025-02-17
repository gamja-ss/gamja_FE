import MainChallenge from "../../components/main/MainChallenge";
import MainGitAnal from "../../components/main/MainGitAnal";
import MainGuestBook from "../../components/main/MainGuestBook";
import MainRoute from "../../components/main/MainRoute";
import MainTIL from "../../components/main/MainTIL";

const Main = () => {
  return (
    <div>
      <div className="px-2 py-2 flex-2 border rounded-xl bg-gray-100 flex flex-col">
        <MainRoute />
        <MainGitAnal />
        <div className="flex justify-between gap-9 bg-white px-4 py-[60px] m">
          <MainGuestBook />
          <MainTIL />
        </div>
        <MainChallenge />
      </div>
    </div>
  );
};

export default Main;
