import styled from "styled-components"
import NightWorld from '../../assets/images/night-world.png'
import Frog from '../../assets/images/frog.png'
import { Link } from "react-router-dom"


const StyledMiniGameLink = styled.div`
background: url(${NightWorld});
background-size: cover;
color: #fff;
padding: 8px;
font-size: 12px;
border-radius: 16px;
font-weight: 600;
position: relative;
width: 112px;
height: 142px;
text-align: left;
overflow: hidden;
`

export const MiniGameLink = () => {
  return (
    <Link to={'/game'} >
      <StyledMiniGameLink>
        <span>Мини игра <br /> за баллы</span>
        <img src={Frog} alt="frog" className="absolute size-[143px] left-0" />
      </StyledMiniGameLink>
    </Link >
  )
}
