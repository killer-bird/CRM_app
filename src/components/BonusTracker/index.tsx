//@ts-ignore
import TaskStar from '../../assets/svg/taskStar.svg?react'
//@ts-ignore
import TrackerDecoration from '../../assets/svg/trackerDecoration.svg?react'

const Task = ({ number }: { number: number }) => {
  return (
    <div className="relative z-20 flex items-center justify-center size-[53px] bg-[#DBD8FF] rounded-full">
      <span className="text-[14px] font-semibold text-[#8C85E3]">{number}</span>
    </div>
  )
}

export const BonusTracker = () => {
  return (
    <div className="rounded-[20px] bg-white p-[16px] text-left">
      <div className="font-semibold text-black text-[26px] mb-[12px]" >Каждая 10 услуга - бесплатно</div>
      <div className="overflow-hidden relative z-10 flex gap-[12px] bg-[#8C85E3] rounded-[20px] p-[12px] mb-[8px] flex-wrap">
        <TrackerDecoration className="absolute bottom-0" />
        {
          Array.from({ length: 9 }).map((_, index) => <Task key={index} number={index + 1} />)
        }
        <div className="z-10 size-[28px] top-[60px] left-[-14px] bg-white rounded-full absolute"></div>
        <div className="z-10 size-[28px] top-[60px] right-[-14px] bg-white rounded-full absolute"></div>
        <div className='relative flex justify-center items-center'>
          <TaskStar />
          <span className=" z-20 absolute text-[14px] font-semibold text-[#8C85E3]">10</span>
        </div>

      </div>
      <div className="text-[12px] opacity-60">Описание того, как это должно работать: покажи администартору интрерфес и он оформит тебе покупку в подарок</div>
    </div>
  )
}
