import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
// import { Button } from 'react-bootstrap';

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name, email, password, phone,address);
        // toast.success('Register Successfully')
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API}/api/va/auth/register`,{name,phone,address,email,password});
            const res = await axios.post("/api/v1/auth/register", { name, phone, address, email, password });
            if (res.data.success) {
                setTimeout(() => {
                    toast.success(res.data.message);
                    // navigate("/login");
                }, 1000);
                navigate("/signin")
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <Layout title="Register - Ecommerce App">
            <>
                <div className='midcardLogin'>
                    <div className='register' style={{ width: "500px" }}>
                        <div className="card text-center" >
                            <div className="card-body">
                                <div className="py-3">
                                    <h1 >Register</h1>
                                    <small>Fill out the form carefully for registration</small>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className="form-control" id="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email_id' className="form-control" id="emailid" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter phone number' className="form-control" id="phonenumber" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" address={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter address' className="form-control" id="address" required />
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
                </div>
            </>
        </Layout>
    )
}

export default Register