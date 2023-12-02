import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout'
import Intro from './intro/intro'
import Contact from './contact/contact';

function App() {
  return (
    <Routes>
      <Route path='/portfolio/' element={<Layout />}>
        <Route index element={<Intro />}></Route>
        <Route path='work' element={<>Add work experiences here</>}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='track' element={<>Add ip detection</>}></Route>
      </Route>
    </Routes>
  )
}

export default App;
