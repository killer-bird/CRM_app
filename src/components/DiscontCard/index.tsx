import React from "react"
import { styled } from "styled-components"
//@ts-ignore
import Point from '../../assets/svg/point.svg?react'
import WhteLines from '../../assets/images/whiteLines.png'
import { QRBtn } from "../QRBtn"
import { QrModal } from "../QRModal"


const StyledDiscontCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #111;
  border-radius: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
`



export const DiscontCard = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <StyledDiscontCard>
      <img className="size-[314px] absolute top-0 right-0" src={WhteLines} alt="" />
      <div className="relative z-10">
        <div className="flex flex-col items-start">
          <div className="text-[16px]">скидка</div>
          <div className="text-[32px]">20%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[4px] items-start">
            <div className="text-[12px] opacity-60" >баллы</div>
            <div className="flex gap-[4px]">
              <div><Point /></div>
              <div className="text-16px">100</div>
            </div>
          </div>
          <div onClick={() => setOpen(prev => !prev)}><QRBtn /></div>
          <QrModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </StyledDiscontCard>
  )
}
