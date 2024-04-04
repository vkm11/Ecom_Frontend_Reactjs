import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
// import { Button } from 'react-bootstrap';

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate()
    const location = useLocation();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name, email, password, phone,address);
        // toast.success('Register Successfully')
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API}/api/va/auth/register`,{name,phone,address,email,password});
            const res = await axios.post("/api/v1/auth/login", { email, password });
            if (res.data.success) {
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

            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <Layout title="Login - Ecommerce App">
            <>
                <div className='midcardLogin' >
                    <div className='register' style={{ width: '400px' }}>
                        <div className="card text-center" style={{ background: 'linear-gradient(45deg, #4964e0, #49c8e0)' }}>
                            <div className="card-body">
                                <div className='py-4'>
                                    <h1 className="">Signin</h1>
                                    <small>Please Enter Your Username and Password!</small>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email_id' className="form-control" id="emailid" required />
                                    </div>
                                    <div className="mb-3">
                                        {/* <input type="password" password={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' className="form-control" id="exampleInputPassword1" required /> */}
                                        <div className="input-group ">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-light bg-white text-black"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}

                                            </button>
                                        </div>

                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1">
                                                Remember me
                                            </label>
                                        </div>
                                        <div>
                                            <span className="forgot"><a>forgot password ?</a></span>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <button type="submit" className="btn btn-primary">Submit</button></div>
                                    {/* <Button type="submit" className="btn btn-primary">Submit</Button>  //  using react bootstrap*/}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Login