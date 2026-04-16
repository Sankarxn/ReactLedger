import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Loginpage from './Components/Loginpage'
import Tableview from './Components/Tableview'
import { Route, Routes } from 'react-router-dom'
import Editview from './Components/Editview'
import Footerbar from './Components/Footerbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     {/* <Loginpage /> */}
     {/* <Tableview /> */}
     <Routes>
      <Route path='/Loginpage' element={<Loginpage />} />
      <Route path='/' element={<Tableview />} />
      <Route path='/Editview/:id' element={<Editview />} />
     </Routes>
     <Footerbar />
    </>
  )
}

export default App
