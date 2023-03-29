import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Packages from "./components/Packages"
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Services" element={<h1>Services</h1>} />
                {/* <Route path="/Contact" element={<h1>Contactus page</h1>} /> */}
                <Route path="/Packages" element={<Packages/>} />
                <Route path="/About" element={<h1>About page</h1>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter