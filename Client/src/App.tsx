
import './App.css'
import Auth from './Components/Auth Component/Auth'
import Home from './Components/Home Component/Home';
import Protected from './Components/Protected Component/Protected';
import Redirecting from './Components/Redirecting Component/Redirecting';
import RedirectingAI from './Components/Redirecting Component/RedirectingAI';
import Track from './Components/Track Components/Track';
import UserInfo from './Components/User Info Component/UserInfo'
import {BrowserRouter,Route,Routes} from 'react-router';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/onboarding' element={<Protected><UserInfo/></Protected>}></Route>
        <Route path='/home' element={<Protected><Home/></Protected>}></Route>
        <Route path='/log' element={<Track/>}></Route>
        <Route path="/rd" element={<RedirectingAI/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
