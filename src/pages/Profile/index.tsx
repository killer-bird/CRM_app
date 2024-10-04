import TestAvatar from '../../assets/images/avatar.jpeg'
import { InputWithLabel, InputPhone } from '../../components'

export const Profile = () => {
  return (
    <div className="h-full w-full mt-[17px]">
      <div className="flex justify-center mb-[40px]">
        <img src={TestAvatar} alt="" className="size-[110px] rounded-full" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <InputWithLabel value='Kseniia Voinova' label='Имя' readOnly />
        <InputWithLabel type='email' value='xvoinovax@gmail.com' label='e-mail' readOnly />
        <InputPhone value={"+7 000 000-00-00"} />
      </div>
    </div>
  )
}
