import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './homepage'
function App() {

  return (
   <div>
       <Router>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>} ></Route>
        </Routes>
       </Router>
   </div>
  )
}

export default App
