import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Main } from './Main';
import { Ref } from './Ref';
import { MiniGame } from './MiniGame';
import { News } from './News';
import { Awards } from './Awards';
import { Profile } from './Profile';
import { ToMainLayout } from './Layouts';

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route element={<ToMainLayout />}>
          <Route path='/ref' element={<Ref />} />
          <Route path='/news' element={<News />} />
          <Route path='/tasks' element={<Awards />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/game' element={<MiniGame />} />
      </Routes>
    </HashRouter>
  )
}
