import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/layout'
import Intro from './pages/intro/intro'
import WorkEducation from './pages/work/workEducation';
import Education from './pages/education/Education';

function App() {
  return (
    <Routes>
      <Route path='/portfolio/' exact element={<Layout />}>
        {/* <Route index element={<Intro />}></Route>
        <Route path='work' element={<Work/>}></Route>
        <Route path='education' element={<Education />}></Route> */}
        {/* <Route path='track' element={<>Add ip detection</>}></Route> */}
      </Route>
    </Routes>
  )
}

export default App;
