//@ts-ignore
import Point from '../../assets/svg/point.svg?react'
//@ts-ignore
import CoinLetter from '../../assets/svg/coinLetter.svg?react'
import { Link } from 'react-router-dom'
export const RefLink = () => {
  return (
    <Link to='/ref' className=' mb-[-20px]'>
      < div className='bg-gray' >
        <div className="relative z-10 top-[-20px] bg-white rounded-[20px] p-[16px] ">
          <div className="relative cursor-pointer bg-gray rounded-[20px] p-[16px] flex justify-between">
            <div className="flex text-left flex-col gap-[8px]">
              <div className="text-black font-semibold" >Приглашай друзей
                <br />и зарабатывай баллы</div>
              <div className="text-purple flex gap-[4px] text-[14px]">
                <span>1 друг =</span>
                <Point />
                <span>100 баллов</span>
              </div>
            </div>
            <CoinLetter className="absolute bottom-0 right-0" />
          </div>
        </div>
      </ div>
    </Link >
  )
}
