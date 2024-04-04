import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SiShopify } from 'react-icons/si'
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast"
function Header() {
    const [auth, setAuth] = useAuth()
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth');
        setTimeout(() => {
            toast.success("Logout Successfully")
        }, 1000)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ background: "#002b82" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/' className="navbar-brand text-white" ><SiShopify /> Ecommerce App</Link>
                        {/* <Link to='/' className="navbar-brand" >    Ecommerce App</Link> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/category' className="nav-link" aria-current="page" >Category</NavLink>
                            </li>
                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <NavLink to='/register' className="nav-link" >SignUp</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/signin' className="nav-link" >SignIn</NavLink>
                                    </li>
                                </>) : (<>
                                    <li className="nav-item">
                                        <NavLink to='/signin' className="nav-link" onClick={handleLogout} >Logout</NavLink>
                                    </li>
                                </>)
                            }
                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link" >Cart (0)</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header