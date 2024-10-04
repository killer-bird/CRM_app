import { ButtonHTMLAttributes } from "react"

export const Button = ({ children, onClick }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#111] rounded-[12px] text-white text-[14px] w-full cursor-pointer flex justify-center items-center">
      {children}
    </button>
  )
}
