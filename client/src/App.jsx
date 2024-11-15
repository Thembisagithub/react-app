import { useState } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/home" element={<Home/>} ></Route>
     </Routes>

     </BrowserRouter>
    
    </>
  )
}

export default App
