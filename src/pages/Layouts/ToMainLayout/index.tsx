import { ToMain } from "../../../components"
import { Outlet } from "react-router-dom"


export const ToMainLayout = () => {
  return (
    <div className="bg-white h-full p-[16px]">
      <header className="mb-[16px]">
        <ToMain />
      </header>
      <main className="text-left h-full">
        <Outlet />
      </main>
    </div>
  )
}
