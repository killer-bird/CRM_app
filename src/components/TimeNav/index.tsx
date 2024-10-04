import { MiniGameLink } from "../MiniGameLink"
import { NewsLink } from "../NewsLink"
import { TasksLink } from "../TasksLink"

export const TimeNav = () => {
  return (
    <div className="bg-white rounded-[20px] p-[16px] w-full">
      <h2 className="mb-[12px] text-left font-semibold text-[20px]">Скоротай время</h2>
      <nav className="flex gap-[4px]">
        <MiniGameLink />
        <NewsLink />
        <TasksLink />
      </nav>
    </div>

  )
}
