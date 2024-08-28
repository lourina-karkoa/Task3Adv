import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Properties from './pages/Properties/Properties'
import PropertyDetalis from './pages/PropertyDetalis/PropertyDetalis'
import ContactUs from './pages/ContactUS/ContactUs'




function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/property' element={<PropertyDetalis />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
    
  )
}

export default App
