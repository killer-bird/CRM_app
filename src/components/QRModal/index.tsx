import { Modal } from "../Modal"
//@ts-ignore
import Point from '../../assets/svg/point.svg?react'
import QRCODE from '../../assets/images/QRCODE.png'
import { Button } from "../Button"
export const QrModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <div className="mt-[-20px] mb-[17px]">
          <div className="flex gap-[6px] items-center justify-center">
            <Point />
            <span className="text-[24px] text-[#111] font-extrabold">100</span>
          </div>
        </div>
        <img className="mb-[24px]" src={QRCODE} alt="" />
        <div className="text-[16px] text-black font-semibold text-center mb-[24px]">
          Покажи сотруднику QR-код, чтобы потратить или накопить баллы
        </div>
        <Button onClick={onClose}>Ок</Button>
      </div>
    </Modal>
  )
}
