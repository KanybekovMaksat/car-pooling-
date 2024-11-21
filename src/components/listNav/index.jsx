import Home from "../../assets/icons/Home";
import { Other } from "../../assets/icons/Other";
import { Work } from "../../assets/icons/Work";

const ListNav = () => {
  const list = [
    {
      title: "Дом",
      img: <Home />,
    },
    {
      title: "Работа",
      img: <Work />,
    },
    {
      title: "Другоеч ",
      img: <Other />,
    },
  ];

  const handleClick = (index) => {
    if (index === 0) {
      localStorage.setItem("state", "[42.859187, 74.667871]");
    } else if (index === 1) {
      localStorage.setItem("state", "[42.940056, 74.623418]");
    }
  };

  return (
    <div className="flex gap-[5px]">
      {list.map((btn, index) => (
        <NavBtn
          key={index}
          text={btn.title}
          icon={btn.img}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default ListNav;

export const NavBtn = (props) => {
  const { text, icon, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="flex gap-[8px] py-[14px] px-[20px] bg-[#19191C] rounded-[12px] text-white"
    >
      {text}
      {icon}
    </button>
  );
};
