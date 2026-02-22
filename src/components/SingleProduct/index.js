import {useState,useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./index.css"

const SingleProduct = () =>{

    const {id} = useParams()

    const [product,setProduct] = useState(null)

   useEffect(()=>{

     const getSingleProduct = async () =>{

        try{

            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
            console.log(res.data)

        }
        catch(err){
            console.log(err)

        }

    }

    getSingleProduct()

   },[id])


    if(!product) return <h1>Loading....</h1>
    return(
        <div className="image-card">

            <div className="product-container">

            <div className="left-part">
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            </div>
            
            <div className="right-part">
            <p>{product.description}</p>
            <p>Price : {product.price}</p>
            <p>Rating :  {product.rating.rate}</p>
            <p>Count : {product.rating.count}</p>
            </div>

            </div>


        </div>
    )


}

export default SingleProduct