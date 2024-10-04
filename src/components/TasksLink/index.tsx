import styled from "styled-components"
import Award from '../../assets/images/award.png'
import { Link } from "react-router-dom"

const StyledTasksLink = styled.div`
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


export const TasksLink = () => {
  return (
    <Link to={'/tasks'}>
      <StyledTasksLink>
        <div>Задания и награды</div>
        <img src={Award} alt="award" className="absolute size-[139px] top-[37px] right-[-30px]" />
      </StyledTasksLink>
    </Link>
  )
}
