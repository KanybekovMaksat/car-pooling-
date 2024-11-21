import Home from '../../assets/icons/Home'
import { Other } from '../../assets/icons/Other'
import { Work } from '../../assets/icons/Work'

const ListNav = () => {
  const list = [
    {
      title: 'Дом',
      img: <Home />,
    },
    {
      title: 'Работа',
      img: <Work />,
    },
    {
      title: 'Другое ',
      img: <Other />,
    },
  ]

  const handleClick = (index) => {
    console.log(index)
  }

  return (
    <div className="flex justify-between w-full">
      {list.map((btn, index) => (
        <NavBtn
          key={index}
          text={btn.title}
          icon={btn.img}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

export default ListNav

export const NavBtn = (props) => {
  const { text, icon, onClick } = props

  return (
    <button
      onClick={onClick}
      className="flex gap-[8px] p-3 bg-[#19191C] rounded-[12px] text-white"
    >
      {text}
      {icon}
    </button>
  )
}
