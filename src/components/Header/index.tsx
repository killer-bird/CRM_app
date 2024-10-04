import { Avatar, BorderAvatar } from "../Avatar"
import TestAvatar from '../../assets/images/avatar.jpeg'
import { Link } from "react-router-dom"



export const Header = () => {
  return (
    <header className="flex justify-between text-white w-full">
      <div className="flex gap-[8px] items-center">
        <Avatar image={TestAvatar} />
        <div className="text-[17px]">AutoMoyka</div>
      </div>
      <Link to={'/profile'}>
        <BorderAvatar image={TestAvatar} />
      </Link>
    </header>
  )
}
