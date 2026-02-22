import "./index.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      
      <h1 className="home-title">Welcome to ShopEasy</h1>

      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        alt="online shopping"
        className="home-image"
      />

      <p className="home-text">
        ShopEasy is your one-stop destination for the best online shopping
        experience. Discover a wide range of quality products at affordable
        prices. Enjoy secure payments, fast delivery, and easy returns — all
        from the comfort of your home.
      </p>

      <Link to="/products">
        <button className="shop-btn">Start Shopping</button>
      </Link>

    </div>
  )
}

export default Home