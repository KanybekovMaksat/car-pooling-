import Home from "../../assets/icons/Home";
import { Other } from "../../assets/icons/Other";
import { Work } from "../../assets/icons/Work";

const ListNav = () => {
  const list = [
    {
      title: "Home",
      img: <Home />,
    },
    {
      title: "Work",
      img: <Work />,
    },
    {
      title: "Other",
      img: <Other />,
    },
  ];

  return (
    <div className="flex gap-[5px]">
      {list.map((btn, index) => (
        <NavBtn key={index} text={btn.title} icon={btn.img} />
      ))}
    </div>
  );
};

export default ListNav;

export const NavBtn = (props) => {
  const { text, icon } = props;

  return (
    <button className="flex gap-[8px] py-[14px] px-[20px] bg-[#19191C] rounded-[12px] text-white">
      {text}
      {icon}
    </button>
  );
};
