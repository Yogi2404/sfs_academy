import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import "../../Assets/css/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import  instance  from "../../Config/axiosconfig.js";

const LoginForm = () => {

    const [label, setLabel] = useState(''); // Set your default label here
    const [error, setErrors] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // const handleGotoRegister = () => {
    //     /DeviceMotionEventnother page
    //     navigate('/login');
    // }; 

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await instance.post("auth/login", { email, password })
                console.log(response)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid justify-content-center d-flex">
                        {/* Card show */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="card shadow mb-4" >

                                {/* Card Body */}
                                <div className="card-body sourcingcard">
                                    <div className="justify-content-center d-flex">
                                        <div className='card-title'>
                                            <h3>Login to your Account</h3>
                                        </div>
                                    </div>
                                    <form>
                                        <div id="pnlCompanyDetails">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-6">
                                                    
                                                    <FormFields
                                                        fieldName="TextInput"
                                                        id="email"
                                                        name="email"
                                                        label={label ? label : "E-Mail"}
                                                        requiredInd={true}
                                                        value={email}
                                                        placeholder={label ? label : "Enter your Mail-ID"}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        showErrorMsg={error && !email.trim() ? "Required!" : ""}
                                                    />
                                                    <FormFields
                                                        fieldName="TextInput"
                                                        id="password"
                                                        name="password"
                                                        label={label ? label : "Password"}
                                                        requiredInd={true}
                                                        value={password}
                                                        placeholder={label ? label : "Enter Password"}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        showErrorMsg={error && !password.trim() ? "Required!" : ""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-submit">
                                            <button
                                                className="button-submit"
                                                onClick={handleSubmit}>Login</button>
                                        </div>
                                        <div className="existing-user">
                                            <a href="/register">Already an existing user? Click here</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div >
                    </div >
                </main>
                <div className="rl-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LoginForm;