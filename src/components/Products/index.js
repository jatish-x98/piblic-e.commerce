
import axios from "axios"
import {useState,useEffect} from "react"
import "./index.css"
import { Link } from "react-router-dom"


const Products = () =>{
    const [product,setProduct] = useState([]) 

    useEffect(()=>{
         const getProducts = async () =>{

        try{
            const res = await axios.get("https://fakestoreapi.com/products")
            setProduct(res.data)
            console.log(res.data)

        }
        catch(err){
            console.log(err)

        }
    }

    getProducts()


    },[])

   

    return(
        <div>
            <h1 className="product-heading"> Products</h1>

          <div className="card-container">
            {product ? (product.map((item)=>(

                <div className="card" key = {item.id}> 
                    <h4>{item.title}</h4>
                    <Link to = {`/products/${item.id}`}><img src = {item.image} alt="" className="prod-image" /></Link>


                    <p>Price : {item.price}</p>
                    <p>Category : {item.category}</p>
                    <p>Ratings : {item.rating.rate}</p>
                    <p>Count : {item.rating.count}</p>
                    <button className="add-to-cart">Add To Cart</button>
                </div>
            ))) : (<p>Loading Please Wait.....</p>)}
              
          </div>

        </div>
    )
}

export default Products