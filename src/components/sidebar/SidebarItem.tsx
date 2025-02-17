const data = [
  {
    id: 0,
    title: "깃 커밋 챌린지",
    desc: "친구와 챌린지로 성장하고 코인을 획득해보세요!",
    src: "/img/achievement1.png",
  },
  {
    id: 1,
    title: "문제풀이 챌린지",
    desc: "친구와 챌린지로 성장하고 코인을 획득해보세요!",
    src: "/img/achievement1.png",
  },
  {
    id: 2,
    title: "백준 연동하기",
    desc: "백준 아이디를 연동하고 문제풀이 챌린지를 시작해보세요!",
    src: "/img/achievement1.png",
  },
];

const SidebarItem = ({ id }: { id: number }) => {
  return (
    <div className="hover:bg-gray-200 cursor-pointer flex justify-between w-[354px] h-[106px] bg-gray-100 rounded-xl py-5 px-5">
      <div className="flex flex-col">
        <div className="text-base font-bold">{data[id].title}</div>
        <div className="text-sm text-[#A1824A] w-[165px] m1-2">{data[id].desc}</div>
      </div>
      <img src={data[id].src} className="w-[70px] h-[66px] rounded-xl"></img>
    </div>
  );
};

export default SidebarItem;
