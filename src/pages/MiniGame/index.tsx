import React from "react"
import styled from "styled-components"
import NightWorld from '../../assets/images/nightWorld2.png'
import NightWorldBottom from '../../assets/images/nightWorldBottom.png'
import BigLeaf from '../../assets/images/bigLeaf.png'
import SmallLeaf from '../../assets/images/smallLeaf.png'
import Frog from '../../assets/images/frog.png'
import GoldMashroom from '../../assets/images/goldMashroom.png'
import RedMashroom from '../../assets/images/redMashroom.png'
import BlueMashroom from '../../assets/images/blueMashroom.png'
import LemonPiece from '../../assets/images/lemonPeice.png'
import Cinnamon from '../../assets/images/cinnamon.png'
import Croissant from '../../assets/images/croissant.png'
import Lily from '../../assets/images/lily.png'
import CoffeItem from '../../assets/images/coffeItem.png'
import GreenArrow from '../../assets/images/greenArrow.png'
import Blueberry from '../../assets/images/blueberry.png'
import Rassbery from '../../assets/images/rassbery.png'


import { Game, GameModal } from "../../components"

import { Link } from "react-router-dom"






const StyledMiniGame = styled.div`
height: 100%;
width: 100%;
background: url(${NightWorld});
background-size: cover;
color: #fff;
padding: 16px;
padding-top: 22px;
font-size: 20px;
font-weight: 700;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
&:after {
  content: '';
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
}
`
const StyledBottom = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  background: url(${NightWorldBottom});
  background-size: cover;
  width: 396px;
  height: 298px;
`

const StyledToMain = styled.div`
  background: url(${GreenArrow});
  background-size: cover;
  width: 61px;
  height: 61px;
`


const testItems = [
  {
    id: 0,
    value: GoldMashroom
  },
  {
    id: 1,
    value: GoldMashroom
  },
  {
    id: 2,
    value: BlueMashroom
  },
  {
    id: 3,
    value: BlueMashroom
  },
  {
    id: 4,
    value: RedMashroom
  },

  {
    id: 5,
    value: RedMashroom
  },
  {
    id: 6,
    value: LemonPiece
  },
  {
    id: 7,
    value: LemonPiece
  },
  {
    id: 8,
    value: Croissant
  },
  {
    id: 9,
    value: Croissant
  },

  {
    id: 10,
    value: Blueberry
  },
  {
    id: 11,
    value: Blueberry
  },
  {
    id: 12,
    value: Rassbery
  },
  {
    id: 13,
    value: Rassbery
  },
  {
    id: 14,
    value: Lily
  },

  {
    id: 15,
    value: Lily
  },
  {
    id: 16,
    value: Cinnamon
  },
  {
    id: 17,
    value: Cinnamon
  },
  {
    id: 18,
    value: CoffeItem
  },
  {
    id: 19,
    value: CoffeItem
  }
];


const ButtonToMain = () => {
  return (
    <Link to={'/'} className="h-[54px] relative z-20 rounded-[99px] bg-[#1F303B] w-full flex items-center justify-center">
      <div className="text-[20px] opacity-45 font-bold">В главное меню</div>
      <div className="absolute left-0 size-[61px]">
        <StyledToMain />
      </div>
    </Link>
  )
}

export const MiniGame = () => {
  const [matchedPairs, setMatchedPairs] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (matchedPairs === 10) {
      setOpen(true)
    }
  }, [matchedPairs])
  const setPairs = () => {
    setMatchedPairs(prev => prev + 1)
  }
  return (
    <StyledMiniGame>
      <img className="absolute z-10 top-0 left-[140px]" src={BigLeaf} alt="" />
      <img className="absolute z-10  top-[22px] left-[287px]" src={SmallLeaf} alt="" />
      <div className="relative z-20" >
        <div className="text-center">
          <div>Найди все пары</div>
          <div className="text-[20px] text-[#BCCAD5] font-bold mb-[16px]">{matchedPairs}/10</div>
        </div>
        <Game items={testItems} setPairs={setPairs} />
      </div>
      <img className="size-[272px] absolute z-20 bottom-[-5px] right-[-30px]" src={Frog} alt="frog" />
      <StyledBottom />
      <ButtonToMain />
      <GameModal isOpen={open} onClose={() => setOpen(false)} />
    </StyledMiniGame>
  )
}
