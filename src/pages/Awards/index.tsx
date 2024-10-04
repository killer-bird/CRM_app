import { TasksList } from "../../components"
import PointsGift from '../../assets/images/pointsGift.png'
import Coins from '../../assets/images/coins.png'

const tasks = [
  {
    image: PointsGift,
    points: 50,
    title: 'Кофеман: Купи 2 кофе',
    text: 'В акции участвуют кофейные напитки: латте, капучино, эспрессо',
    tasksCount: 1,
    completedTasksCount: 1
  },
  {
    image: Coins,
    points: 10,
    title: 'Кофеман: Купи 2 кофе',
    text: 'В акции участвуют кофейные напитки: латте, капучино, эспрессо',
    tasksCount: 5,
    completedTasksCount: 1
  }
]

export const Awards = () => {
  return (
    <div className="h-full">
      <div className="text-[24px] font-semibold mb-[4px]">Задания и награды</div>
      <div className="opacity-60 mb-[12px] text-[14px] font-medium tracking-[-0.4px]">Выполняй задания и получай награды. Сканируй QR-код каждого задания</div>
      <TasksList tasks={tasks} />
    </div>
  )
}
