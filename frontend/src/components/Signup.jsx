import React, { useState, useContext, useEffect } from 'react'
import "../styles/style.css"
import { BooleanFlag } from '../App';
import { IoPersonCircleOutline, IoMailOpenOutline } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { LoginValidate, SignupValidate } from './Validator';
import { useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate();
    const [loader, setloader] = useState(false);

    const { page } = useContext(BooleanFlag)

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const [Email1, setEmail1] = useState("")
    const [Password1, setPassword1] = useState("")

    const [Error, setError] = useState({})
    const [error, seterror] = useState({})

    const [text, settext] = useState(false)
    const [show, setShow] = useState(Boolean)


    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setEmail1("");
        setPassword1("");
    };

    const AllClearlogin = () => {
        setEmail1("");
        setPassword1("");
        seterror({})
    }

    const AllClearsignup = () => {
        setName("");
        setEmail("");
        setPassword("");
        setError({})
    }

    useEffect(() => {
        setShow(page)
    }, [page])

    const Login = () => {
        setShow(true)
    }
    const signup = () => {
        setShow(false)
    }

    const submitLogin = (e) => {
        e.preventDefault();
        const error = LoginValidate(Email1, Password1);
        seterror(error)
        // console.log(Object.keys(error).length)

        if (Object.keys(error).length === 0) {
            setloader(true)
            axios.post("https://sounth-indian-backend.onrender.com/router/login", { Email1, Password1 }, { withCredentials: true })
                .then((res) => {
                    if (res.data.status === "success") {
                        toast.success("Login Successfully")
                        resetForm();
                        setTimeout(() => {
                            navigate("/")
                        }, 2500)
                    } else if (res.data.status === "warning") {
                        toast.warning("Invalid credential")
                    }
                    else {
                        toast.error("User not yet register!")
                    }
                })
                .catch((err) => {
                    console.log("Error while Login", err)
                })
                .finally(() => {
                    setloader(false)
                })
        } else {
            console.log(Object.keys(error).length)
        }

    }

    const submitSignup = (e) => {
        e.preventDefault();
        const Error = SignupValidate(Name, Email, Password);
        setError(Error)

        if (Object.keys(Error).length === 0) {
            setloader(true)
            axios.post("https://sounth-indian-backend.onrender.com/router/signup", { Name, Email, Password }, { withCredentials: true })
                .then((res) => {
                    if (res.data.status === "success") {
                        toast.success("Signup Successfully")
                        resetForm();
                        setTimeout(() => {
                            setShow(true)
                        }, 2500)
                    } else if (res.data.status === "warning") {
                        toast.warning("User Already Registered")
                    }
                    else {
                        toast.error("Signup failed!")
                    }
                })
                .catch((err) => {
                    console.log("Error while signup", err)
                })
                .finally(() => {
                    setloader(false)
                })
        }
        else {
            console.log(Object.keys(Error).length)
        }
        // console.log(Object.keys(Error).length === 0)
    }




    return (
        <>
            <div className="sigup-section">

                <div className="signup-layout">

                    <form className={`signup-form ${show ? "signup-hide" : "signup-show"}`} onSubmit={submitSignup} noValidate>
                        <div className="signup-head">
                            <h2 className="company-name1 signup-head1">South Indian</h2>
                            <h3 className="company-name2 signup-head1" >Restaurant</h3>
                        </div>
                        <div className="signup-title">
                            Signup
                        </div>
                        <div className='formerror'>
                            <div className="signup-group">
                                <IoPersonCircleOutline className='signup-icon' />
                                <input type="text" className="signup-field" placeholder='Name' value={Name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <p className="error">{Error.nameError}</p>
                        </div>
                        <div className='formerror'>
                            <div className="signup-group">
                                <IoMailOpenOutline className='signup-icon' />
                                <input type="email" className="signup-field" placeholder='Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <p className="error">{Error.emailError}</p>
                        </div>
                        <div className='formerror'>
                            <div className="signup-group">
                                <TbPasswordUser className='signup-icon' />
                                <input type={text ? "text" : "Password"} className="signup-field" placeholder='password' value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                                {text ? <HiOutlineEye className='eye' onClick={() => { settext(!text) }} /> : <HiOutlineEyeOff className='eye' onClick={() => { settext(!text) }} />}
                            </div>
                            <p className="error">{Error.PasswordError}</p>
                        </div>

                        <center><button className='signup-btn' >{loader ? <RotatingLines
                            visible={true}
                            height="10"
                            width="20"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            strokeColor='white'
                        /> : "Signup"}</button></center>
                        <p className="signuptext">Already have an account ?<span className="mark" onClick={() => { Login(); AllClearlogin(); }}> Login</span> here</p>

                    </form>



                    <form className={`login-form  ${show ? "login-show" : "login-hide"}`} onSubmit={submitLogin} noValidate>
                        <p className="signup-head">
                            <h2 className="company-name1 signup-head1">South Indian</h2>
                            <h3 className="company-name2 signup-head1" >Restaurant</h3>
                        </p>
                        <p className="signup-title">
                            Login
                        </p>
                        {/* <div className="signup-group">
                        <IoPersonCircleOutline className='signup-icon' />
                        <input type="text" className="signup-field" placeholder='Name' />
                    </div> */}
                        <div className='formerror'>
                            <div className="signup-group">
                                <IoMailOpenOutline className='signup-icon' />
                                <input type="email" className="signup-field" placeholder='Email' value={Email1} onChange={(e) => { setEmail1(e.target.value) }} />
                            </div>
                            <p className="error">{error.emailError}</p>
                        </div>
                        <div className='formerror'>
                            <div className="signup-group">
                                <TbPasswordUser className='signup-icon' />
                                <input type={text ? "text" : "Password"} className="signup-field" placeholder='password' value={Password1} onChange={(e) => { setPassword1(e.target.value) }} />
                                {text ? <HiOutlineEye className='eye' onClick={() => { settext(!text) }} /> : <HiOutlineEyeOff className='eye' onClick={() => { settext(!text) }} />}
                            </div>
                            <p className="error">{error.PasswordError}</p>
                        </div>




                        <center><button className='signup-btn'>{loader ? <RotatingLines
                            visible={true}
                            height="25"
                            width="20"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            strokeColor='white'
                        /> : "Login"}</button></center>
                        <p className="signuptext">Don't have an account ?<span className="mark" onClick={() => { signup(); AllClearsignup(); }}> Signup</span> here</p>
                    </form>




                </div>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                draggable={false}
                transition={Bounce}
            />
        </>

    )
}

export default Signup
