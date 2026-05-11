
import './App.css'
import Auth from './Components/Auth Component/Auth'
import UserInfo from './Components/User Info Component/UserInfo'
import {BrowserRouter,Route,Routes} from 'react-router';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/onboarding' element={<UserInfo/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
