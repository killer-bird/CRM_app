import { styled } from 'styled-components'
import { Header, DiscontCard, RefLink, TimeNav, BonusTracker } from "../../components"


const StyledTop = styled.div`
  background: radial-gradient(42.84% 76.41% at -13.73% 28.16%, #FFF 4%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(47.9% 153.26% at 112.53% 38.81%, #FFF 4%, rgba(255, 255, 255, 0.00) 100%), #7065EF;
  padding: 15px;
  padding-bottom: 42px;
`
export const Main = () => {
  return (
    <main className='h-full'>
      <StyledTop>
        <div className='mb-[25px]'>
          <Header />
        </div>
        <DiscontCard />
      </StyledTop>
      <RefLink />
      <div className='bg-gray mt-[-20px] flex flex-col gap-[4px] py-[4px] pb-[16px]'>
        <TimeNav />
        <BonusTracker />
      </div>
    </main >
  )
}
