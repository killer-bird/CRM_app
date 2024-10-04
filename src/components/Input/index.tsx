import { InputHTMLAttributes } from "react"
import React from 'react'


//@ts-ignore
export const Input = ({ value, type, placeholder, readOnly }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input readOnly={readOnly} type={type} value={value} className="w-full  rounded-[12px]  p-[12px] pt-[22px] leading-[18px] bg-gray text-[14px] flex items-end h-[52px] border-none outline-none" />
  )
}


//@ts-ignore
export const InputPhone = ({ value, type, placeholder, readOnly }: InputHTMLAttributes<HTMLInputElement>) => {

  const [inputValue, setInputValue] = React.useState<string>(value as string);


  //@ts-ignore
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <input readOnly={readOnly}
        value={inputValue.slice(2)}
        onChange={handleChange}
        type="phone"
        className="w-full  rounded-[12px]  p-[12px] pl-[27px] leading-[18px] bg-gray text-[14px] flex items-end h-[52px] border-none outline-none" />
      <span className="absolute top-[50%] left-[12px] translate-y-[-50%] text-[#1C1C1E] text-[14px]">{inputValue.slice(0, 2)}</span>
    </div>
  )
}

type Props = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>


//@ts-ignore
export const InputWithLabel = ({ value, label, type, placeholder, readOnly }: Props) => {
  return (
    <div className="relative">
      <label className="absolute left-[12px] top-[9px] text-[12px] text-[#ADAEB2]">{label}</label>
      <input readOnly={readOnly} type={type} value={value} className="w-full  rounded-[12px]  p-[12px] pt-[22px] leading-[18px] bg-gray text-[14px] flex items-end h-[52px] border-none outline-none" />
    </div>
  )
}
