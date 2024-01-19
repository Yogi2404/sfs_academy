import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "../../Assets/css/Course.css"

const Course = () => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    const handleEnrollment = () => {
        if (isChecked) {
            handleGotoPayments();
        } else {
            alert("Please agree to the terms and conditions to proceed.");
        }
    };

    const handleGotoPayments = () => {
        navigate('/payments');
    };
    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="header">
                            <div className="course-info">
                                <h1>Course Name</h1>
                                <p>Physiotherapy Tutorial Program</p>
                                <p>[4 months live lectures(Program accessible for one year)]</p>
                                <h2>Description</h2>
                                <p>It covers all specialities of physical therapy components of academic, clinical and recent advances.  </p>
                                <h2>Eligibility Criteria:</h2>
                                <p>Third Year, Final Year, Bachelors & Masters of Physiotherapy all are eligible for joining this online tutorial.</p>
                            </div>
                            <div className="accept">
                                <input
                                    type="checkbox"
                                    id="termsCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="check-label text-wrap" htmlFor="termsCheckbox">I agree to the terms and conditions and give my consent to pay the fees eligible for this program.</label><span className="red-star">*</span>
                            </div>
                            <div className="fees">
                                <h2>Fees Structure: ₹ 36,999/-</h2>
                                
                            </div>
                            <div className="enroll-button-payment">
                                <button onClick={handleEnrollment}>Enroll now for the course and proceed with payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Course;