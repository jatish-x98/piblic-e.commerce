
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import SingleProduct from "./components/SingleProduct"
import Footer from "./components/Footer"
import { useTheme } from "./components/ThemeContext"


function App() {

  const {theme} = useTheme()

  return(
    <div className = {theme}>
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element = {<Home/>}/>
        <Route path="/products" element = {<ProtectedRoute> <Products/> </ProtectedRoute>}/>
        <Route path="/products/:id" element = {<ProtectedRoute> <SingleProduct/> </ProtectedRoute>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/wishlist" element = {<Wishlist/>} />
        <Route path="/login" element = {<Login/>} />
        
      </Routes>
      <Footer />
    </Router>
   

    </div>

    

  )
}

export default App