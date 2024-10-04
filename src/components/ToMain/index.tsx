import { Link } from "react-router-dom"
//@ts-ignore
import Arrow from '../../assets/svg/arrow.svg?react'
export const ToMain = () => {
  return (
    <Link to="/" className="text-[#2D72FF] text-left items-center font-medium flex gap-[2px]">
      <Arrow /> На главную
    </Link>
  )
}
