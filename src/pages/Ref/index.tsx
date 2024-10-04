import { RefCard } from "../../components"

export const Ref = () => {
  return (
    <div>
      <div className="text-[24px] font-semibold mb-[16px]">
        Реферальная программа
      </div>
      <div className="mb-[30px]">
        <div className="mb-[12px]">
          <RefCard />
        </div>
        <span className="text-black text-[12px] opacity-60">
          Приглашай друзей и получай баллы.<br />
          За каждого нового человека ты получишь 100 баллов.
        </span>
      </div>
      <div>
        <div className="text-[18px] font-semibold mb-[24px]">
          Как это работает?
        </div>
        <div className="flex gap-[8px]">
          <div className="flex flex-col gap-[8px] items-center">
            <div className="size-[24px] bg-[#ECECEC] rounded-full text-[#969595] flex justify-center items-center text-[12px]">
              1
            </div>

            <div className="w-[1px] h-[88px] rounded-[4px] bg-[#969595]"></div>
            <div className="size-[24px] bg-[#ECECEC] rounded-full text-[#969595] flex justify-center items-center text-[12px]">
              2
            </div>
            <div className="w-[1px] h-[88px] rounded-[4px] bg-[#969595]"></div>
            <div className="size-[24px] bg-[#ECECEC] rounded-full text-[#969595] flex justify-center items-center text-[12px]">
              3
            </div>
          </div>
          <div className="flex flex-col gap-[24px] text-[14px] pt-[4px]">
            <div className="flex flex-col gap-[4px]">
              <div className="font-medium text-black">
                Скопируй ссылку и отправь другу
              </div>
              <div className="font-medium text-[12px] opacity-60">
                Пригласи друга, который ранее не использовал наш сервис за последний 12 месяцев. Убедись, что он перешёл по ссылке
              </div>
            </div>
            <div className="flex flex-col gap-[2px] pt-[20px]">
              <div className="font-medium text-black">
                Твой друг получит 10% скидку на любой вид услуги
              </div>
              <div className="font-medium text-[12px] opacity-60">

                Каждый твой друг получает 10% скидку при первом получении любого вида из наших услуг. В услуги входят: мойка машины, палировка, чистка салона
              </div>
            </div>
            <div className="flex flex-col gap-[4px] pt-[8px]">
              <div className="font-medium text-black">
                Забери свои полученные баллы!
              </div>
              <div className="font-medium text-[12px] opacity-60">
                Мы пришлем тебе Push-уведомление о начислении
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
