
import './App.css'
import Auth from './Components/Auth Component/Auth'
import Home from './Components/Home Component/Home';
import Track from './Components/Track Components/Track';
import UserInfo from './Components/User Info Component/UserInfo'
import {BrowserRouter,Route,Routes} from 'react-router';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/onboarding' element={<UserInfo/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/log' element={<Track/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
