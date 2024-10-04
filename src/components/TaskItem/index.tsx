import { Task } from "../../types"
//@ts-ignore
import Point from '../../assets/svg/point.svg?react'
import { Progress } from "../Progress"
import OpenGift from '../../assets/images/open-gift.png'
//@ts-ignore
import QR from '../../assets/svg/qr.svg?react'



const TaskItem = ({ image, points, title, text, tasksCount, completedTasksCount }: Task) => {
  const isAllCompleted = completedTasksCount === tasksCount;
  console.log(isAllCompleted);
  return (
    <div className="bg-gray py-[16px] rounded-[24px] pr-[16px] flex gap-[7px]">
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center ml-[8px] mb-[5px]">
          <img
            style={{
              opacity: isAllCompleted ? '0.5' : '1',
            }}
            className="min-w-[90px] w-full h-full" src={image} alt="task" />
          <div
            style={{
              transform: isAllCompleted ? 'rotate(-8deg)' : 'rotate(0deg)'
              ,
            }}
            className="absolute bg-white rounded-[99px] bottom-0 w-[63px] flex items-center p-[6px] gap-[4px]">
            <Point />
            <span className=" z-10 text-[16px] font-extrabold">{points}</span>
          </div>
        </div>
        <span className="text-[10px] opacity-40 font-medium">Награда</span>
      </div>
      <div>
        <div className="text-[16px] font-semibold mb-[2px]">{title}</div>
        <div className="opacity-60 font-medium text-[12px] mb-[8px]">{text}</div>
        <Progress tasks={tasksCount} completedTasks={completedTasksCount} />
        {!isAllCompleted && <div className="text-[12px] font-medium text-black bg-white flex items-center justify-center gap-[8px] opacity-60 mt-[16px] w-[130px] h-[33px] rounded-[99px]">
          <QR className="qr-path-fill" /> Сканировать
        </div>}
      </div>
    </div>
  )
}


export const TasksList = ({ tasks }: { tasks: Task[] }) => {
  if (tasks.length === 0) {
    return <div className="h-full w-full flex justify-center items-center flex-col gap-[16px]">
      <img src={OpenGift} alt="" />
      <div className="opacity-50 text-[16px] text-center text-black">У тебя пока нет доступных заданий и наград</div>
    </div>
  }
  return (
    <div className="flex flex-col gap-[12px]">
      {tasks.map((task, index) => <TaskItem key={index} {...task} />)}
    </div>
  )
}
