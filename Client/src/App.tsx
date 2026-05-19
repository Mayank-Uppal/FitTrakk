
import './App.css'
import Auth from './Components/Auth Component/Auth'
import Home from './Components/Home Component/Home';
import Protected from './Components/Protected Component/Protected';
import Track from './Components/Track Components/Track';
import UserInfo from './Components/User Info Component/UserInfo'
import {BrowserRouter,Route,Routes} from 'react-router';
import Log from './Components/Log Component/Log';
import AllLog from './Components/Complete Log Component/AllLog';
import Logs from './Components/Loading Component/Logs';
import Dashboard from './Components/Loading Component/Dashboard';
import Summary from './Components/Loading Component/Summary';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/onboarding' element={<UserInfo/>}></Route>
        <Route path='/home' element={<Protected><Home/></Protected>}></Route>
        <Route path='/log' element={<Protected><Track/></Protected>}></Route>
        <Route path='/alllogs' element={<Protected><Log/></Protected>}></Route>
        <Route path='/alllogs/details' element={<Protected><AllLog/></Protected>}></Route>
        <Route path='l' element={<Logs/>}></Route>
        <Route path='/d' element={<Dashboard/>}></Route>
        <Route path='/s' element={<Summary/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
