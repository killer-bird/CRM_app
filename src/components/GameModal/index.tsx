import ForestQr from '../../assets/images/forestQR.png'
import Coffee1 from '../../assets/images/coffee1.png'
import Coffee2 from '../../assets/images/coffee2.png'

import { Modal } from "../Modal"
import { Button } from "../Button"

export const GameModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="text-black mb-[24px] text-center mt-[-8px] text-[20px] font-semibold flex justify-center">
        Удача!<br />
        Вы выиграли кофе!
      </div>
      <div className="relative flex justify-center mb-[24px]">
        <img className='relative z-10' src={ForestQr} alt="" />
        <img className='absolute left-[-10px] bottom-[5px]' src={Coffee1} alt="" />
        <img className='absolute right-[-10px] bottom-[25px]' src={Coffee2} alt="" />
      </div>
      <div className="text-center text-black font-medium">
        Покажи сотруднику QR-код, чтобы потратить или накопить баллы
      </div>
      <div
        className="opacity-50 text-[14px] font-medium text-center mb-[26px]">
        Код действует в течение часа
      </div>
      <Button onClick={onClose}>Ок</Button>
    </Modal>
  )
}
