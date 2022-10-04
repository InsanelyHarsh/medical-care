import React, { useState } from 'react'
// import "./Modal.css"
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


export const Modal = ({ setIsModalOpen }) => {
    const [log, setLog] = useState(true);
    const current = () => {

        setLog(!log)


    }


    return (
        <div className='modal'>
            <button onClick={() => { setIsModalOpen(false) }}>x</button>

            <body>
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">



                            {log && <form action="/" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>


                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>


                                <input type="submit" value="Login" className="btn solid" />
                                <p className="social-text">Sign in with social platforms</p>
                            </form>}



                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FcGoogle />
                                </a>
                                <a href="#" className="social-icon">
                                    <ImFacebook2 />
                                </a>
                                <a href="#" className="social-icon">
                                    <BsTwitter />
                                </a>
                                <a href="#" className="social-icon">
                                    <BsInstagram />
                                </a>
                            </div>




                            {!log && <form action="/" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" className="btn" value="Sign up" />
                                <p className="social-text">Sign up with social platforms</p>

                            </form>
                            }



                        </div>
                    </div>





                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3 onClick={current}>New Here ?</h3>
                                <p>
                                    Register and Join the RoomMate Family
                                </p>
                                <button className="btn transparent" id="sign-up-btn">
                                    Sign up
                                </button>
                            </div>

                        </div>




                    </div>
                </div>




            </body>





        </div>
    )
}

export default Modal