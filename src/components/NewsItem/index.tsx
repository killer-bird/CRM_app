import React from "react"
import { NewsModal } from "../NewsModal"

const MAX_LENGTH = 150
export const NewsItem = ({ title, text }: { title: string, text: string }) => {
  const [open, setOpen] = React.useState(false)
  const truncatedText =
    text.length > MAX_LENGTH ? text.slice(0, MAX_LENGTH) + '...' : text;
  return (
    <div className="bg-gray p-[16px] rounded-[24px]">
      <div className="font-semibold text-black">{title}</div>
      <div className="text-[12px] text-black opacity-60 ">{truncatedText}</div>
      {truncatedText.length < text.length && <div className="text-[12px] text-[#2D72FF]" onClick={() => setOpen(true)}>Читать все</div>}
      <NewsModal isOpen={open} onClose={() => setOpen(false)} title={title} text={text} />
    </div >
  )
}
