import styled from "styled-components"
//@ts-ignore
import Point from '../../assets/svg/point.svg?react'
import { CopyInput } from "../CopyInput"


const StyledRefCard = styled.div`
  background: linear-gradient(120deg, #3793FF 3.87%, #ACD2FF 96.81%);
  position: relative;
  padding: 16px;
  border-radius: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 216px;
  overflow: hidden;
`

export const RefCard = () => {
  return (
    <StyledRefCard>
      <div className="absolute blur-[40px] left-[30px] top-[30px] w-[438px] h-[129px] rotate-[-17deg] rounded-[438px] bg-[#2267ED]"></div>
      <div className="relative z-10">
        <div className="text-[24px] font-extrabold	">
          <span>Пригласи и получи </span>
          <div className="flex gap-[6px] items-center">
            <Point />
            <span>100 баллов</span>
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-white text-[12px] opacity-80 mb-[5px]">Скопируй и отправь другу</span>
          <CopyInput code="1234" />
        </div>
      </div>
    </StyledRefCard>
  )
}
