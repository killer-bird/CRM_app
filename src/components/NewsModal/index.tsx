import { Modal } from "../Modal"


export const NewsModal = ({ isOpen, onClose, title, text }: { isOpen: boolean, onClose: () => void, title: string, text: string }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="font-semibold text-black text-[20px] mb-[8px]">{title}</div>
        <div className="text-[14px] text-black opacity-80 ">{text}</div>
      </div>
    </Modal>
  )
}
