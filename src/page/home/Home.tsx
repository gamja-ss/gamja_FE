import Profile from "./Profile";
import Main from "./Main";
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <div className="flex gap-4 items-stretch">
      <Profile />
      <Main />
      <Sidebar />
    </div>
  );
};

export default Home;
