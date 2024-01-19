import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "../../Assets/css/RegisterForm.css";
import { useNavigate } from 'react-router-dom';
import instance from "../../Config/axiosconfig";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Password from "../Common/Password";

const RegisterForm = () => {

    const [label, setLabel] = useState(''); // Set your default label here
    const [error, setErrors] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleGotoLogin = () => {
        // Use the history object to navigate to another page
        navigate('/login');
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await instance.post("auth/register", { firstName, lastName, email, mobileNumber, password, confirmPassword });
            console.log(response);
            toast.success('Registration successful! You can now log in.', { position: "top-right" });
            // Add any further logic you need after successful registration
            // Navigate to another page after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000); // 3000 milliseconds (3 seconds)
        } catch (e) {
            console.log(e);
            toast.error('Registration failed. Please check your details and try again.', { position: "top-right" });
        }
    };

    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div>
                    {/* ... (your other components) */}
                    <ToastContainer />
                </div>
                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">
                        {/* Card show */}
                        <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4" >

                                {/* Card Body */}
                                <div className="card-body sourcingcard">
                                    <div className="justify-content-center d-flex">
                                        <div className='card-title'>
                                            <h3>Sign Up</h3>
                                        </div>
                                    </div>
                                    <form>
                                        <div id="pnlCompanyDetails">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <FormFields
                                                                fieldName="TextInput"
                                                                id="firstName"
                                                                name="firstName"
                                                                label={label ? label : "First Name"}
                                                                requiredInd={true}
                                                                value={firstName}
                                                                placeholder={label ? label : "Enter your First Name"}
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                                showErrorMsg={error && !firstName.trim() ? "Required!" : ""}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FormFields
                                                                fieldName="TextInput"
                                                                id="lastName"
                                                                name="lastName"
                                                                label={label ? label : "Last Name"}
                                                                requiredInd={true}
                                                                value={lastName}
                                                                placeholder={label ? label : "Enter your Last Name"}
                                                                onChange={(e) => setLastName(e.target.value)}
                                                                showErrorMsg={error && !lastName.trim() ? "Required!" : ""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
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
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FormFields
                                                                fieldName="TextInput"
                                                                id="mobileNumber"
                                                                name="mobileNumber"
                                                                label={label ? label : "Mobile Number"}
                                                                requiredInd={true}
                                                                value={mobileNumber}
                                                                placeholder={label ? label : "Enter your Mobile Number"}
                                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                                showErrorMsg={error && !mobileNumber.trim() ? "Required!" : ""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
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
                                                        <div className="col-lg-6">
                                                            <FormFields
                                                                fieldName="TextInput"
                                                                id="confirmPassword"
                                                                name="confirmPassword"
                                                                label={label ? label : "Confirm Password"}
                                                                requiredInd={true}
                                                                value={confirmPassword}
                                                                placeholder={label ? label : "Re-Enter Password"}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                                showErrorMsg={error && !confirmPassword.trim() ? "Required!" : ""}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="register-submit">
                                            <button
                                                className="button-submit"
                                                onClick={handleRegisterSubmit}>Register
                                            </button>
                                        </div>
                                        <div className="existing-user">
                                            <a href="/login" onClick={handleGotoLogin}>Already an existing user? Click here</a>
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

export default RegisterForm;