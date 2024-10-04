import styled from "styled-components"
import Coffe from '../../assets/images/coffe.png'
import { Link } from "react-router-dom"

const StyledNewsLink = styled.div`
  background: #F2F1F6;
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

export const NewsLink = () => {
  return (
    <Link to={'/news'}>
      <StyledNewsLink>
        <div>Новости <br /> о нас</div>
        <img src={Coffe} alt="coffe" className="absolute size-[139px] top-[37px] right-[-30px]" />
      </StyledNewsLink>
    </Link>
  )
}
