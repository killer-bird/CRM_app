import React from 'react'
import styled from 'styled-components'
import { GameItemT } from '../../types'

const StyledGameItem = styled.div`
  cursor: pointer;
  width: 72px;
  height: 76px;
  background: #1F303B;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  color: rgba(255, 255, 255, 0.53);
  border-bottom: 4px solid #304655;
`


const GameItem = ({ value, isOpen, handleClick, id }: { handleClick: (id: number, value: string) => void } & GameItemProps) => {
  const onClick = () => {
    if (isOpen) return
    handleClick(id, value)
  }
  return <StyledGameItem
    onClick={onClick}>
    {isOpen && <img className='size-[54px]' src={value} />}
    {!isOpen && "?"}
  </StyledGameItem>
}

type GameItemProps = {
  isOpen: boolean
} & GameItemT
export const Game = ({ items, setPairs }: { items: GameItemT[], setPairs: () => void }) => {
  const [openedItems, setOpenedItems] = React.useState<{ [key: number]: string }>({})
  const handleClick = (id: number, value: string) => {

    setOpenedItems(prev => {
      const newOpenedItems = { ...prev }
      newOpenedItems[id] = value
      return newOpenedItems
    })
    const openedValues = Object.values(openedItems)
    if (openedValues.includes(value)) {
      setPairs()
    }

  }
  return (
    <div className='relative z-30 flex gap-[14px] flex-wrap'>
      {items.map((item, index) =>
        <GameItem key={index} id={item.id} value={item.value} isOpen={!!openedItems[item.id]} handleClick={handleClick} />)}
    </div>
  )
}
