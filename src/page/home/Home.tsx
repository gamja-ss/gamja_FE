import Header from "../../components/Header";
import Profile from "./Profile";
import Main from "./Main";
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex my-4 gap-4 justify-center min-w-[1900px] font-default">
        <Profile />
        <Main />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
