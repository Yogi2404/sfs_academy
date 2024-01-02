import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import "../../Assets/css/RegisterForm.css";
import { useNavigate } from 'react-router-dom';
import instance from "../../Config/axiosconfig";

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await instance.post("auth/register", { firstName, lastName, email, mobileNumber, password, confirmPassword })
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
                                        <div className="register-submit">
                                            <button
                                                className="button-submit"
                                                onClick={handleSubmit}>Register
                                            </button>
                                        </div>
                                        <div className="existing-user">
                                            <a href="/login" onClick={handleGotoLogin}>Are you a new user? Click here</a>
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