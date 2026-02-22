import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./index.css"


const Login = () =>{

    const navigate = useNavigate()

    const[username,setUsername] = useState("")

    const[password,setPassword] = useState("")

    const handleLogin = async (e) =>{
        e.preventDefault()

       try{
         const res = await axios.post("https://fakestoreapi.com/auth/login",{username,password})
         console.log(res.data)
         alert("Login Success")
         localStorage.setItem("token",res.data.token)
         navigate("/products")

       }
       catch(err){
        console.log(err)
        alert("Login Failure")

       }

    }

    return(
        <div className="login">


            <form onSubmit={handleLogin}>
                <label>Username</label><br/>
                <input type="text" placeholder="User Name" value={username} onChange={(e)=>setUsername(e.target.value)} /><br/>

                <label>Password</label><br/>
                <input type="password" placeholder="Enter Your Password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>

                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login