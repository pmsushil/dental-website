import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Layouts from './components/Shared/Layouts'
import Topbar from './components/Shared/Topbar'
import Treatment from './components/Treatment.jsx/Treatment'
import Blog from './components/Blog/Blog'
import Contactus from './components/Contact/Contactus'
import Doctors from './components/Accessories/Doctors'


const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Layouts/>}>
   
     
  
       </Route>
       <Route path='/treatment' element={<Treatment/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/contactus' element={<Contactus/>} />
       <Route path='/doctors' element={<Doctors/>} />
      </Routes>
      </Router>
  )
}

export default App
