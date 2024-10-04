//@ts-ignore
import CopyBtn from '../../assets/svg/copyBtn.svg?react'


export const CopyInput = ({ code }: { code: string }) => {

  return (
    <div className="relative">
      <input className="w-full rounded-[12px] p-[12px] text-[#266AED] bg-white" type="text" value={code} readOnly />
      <CopyBtn className="absolute right-[12px] bottom-1/2 translate-y-[50%] cursor-pointer" onClick={() => navigator.clipboard.writeText(code)} />
    </div>
  )
}
