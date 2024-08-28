import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Properties from './pages/Properties/Properties'
import PropertyDetalis from './pages/PropertyDetalis/PropertyDetalis'
import ContactUs from './pages/ContactUS/ContactUs'




function App() {

  return (
    <Routes>
      <Route path='/Task3Adv/' element={<Home />} />
      <Route path='/Task3Adv/properties' element={<Properties />} />
      <Route path='/Task3Adv/property' element={<PropertyDetalis />} />
      <Route path='/Task3Adv/contact' element={<ContactUs />} />
    </Routes>
    
  )
}

export default App
