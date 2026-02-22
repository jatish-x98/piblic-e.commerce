 import { Link,useNavigate } from "react-router-dom"
 import { FaCartArrowDown } from "react-icons/fa6";
 import { CiHeart } from "react-icons/ci";
 import { useTheme } from "../ThemeContext";
 import "./index.css"
 import { CiBrightnessUp } from "react-icons/ci";
 import { IoIosMoon } from "react-icons/io";






 
 function Navbar () {
    
    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const {theme,toggleTheme} = useTheme()

    const handleLogout = () =>{
        localStorage.removeItem("token")
        navigate("/login")
    }


    return(
        <nav className="nav-container">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Shopping-cart-logo-by-DEEMKA-STUDIO.jpg" alt="ShopEasy Logo" className="nav-logo"/>
            
            <div className="nav-elements">
            
            <Link to = "/" className="nav-link">Home</Link>
            <button onClick={toggleTheme}>
                {theme === "light" ? <CiBrightnessUp /> : <IoIosMoon />}
                
            </button>

            {token ? (<><Link to = "/products" className="nav-link"> Products</Link> </>) : (<><Link to = "login" className="nav-link">Login</Link> </>) }
            
            <Link to = "/cart" className="nav-link"><FaCartArrowDown /></Link>
            <Link to = "/wishlist" className="nav-link"><CiHeart /></Link>

            <button onClick = {handleLogout}>Logout</button>
            

            </div>
        </nav>
    )
 }

 export default Navbar