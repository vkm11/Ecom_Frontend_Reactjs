import React,{useState} from 'react'
import Layout from '../../components/Layouts/Layout'
// import { Button } from 'react-bootstrap';

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate()
    const location = useLocation();

    // form function
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log(name, email, password, phone,address);
        // toast.success('Register Successfully')
        try{
            // const res = await axios.post(`${process.env.REACT_APP_API}/api/va/auth/register`,{name,phone,address,email,password});
            const res = await axios.post("/api/v1/auth/login",{email,password});
            if(res.data.success){
                setTimeout(() => {
                    toast.success(res.data.message);
                    // navigate("/login");
                }, 1000);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem("auth", JSON.stringify(res.data))
                navigate(location.state || "/")

            }else{
                toast.error(res.data.message)
            }
        
        }catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <Layout title="Login - Ecommerce App">
            <>
                <div className='register'>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="">Signin Page</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email_id' className="form-control" id="emailid" required />
                                </div>
                           
                                <div className="mb-3">
                                    <input type="password" password={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>  
                                {/* <Button type="submit" className="btn btn-primary">Submit</Button>  //  using react bootstrap*/}
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Login