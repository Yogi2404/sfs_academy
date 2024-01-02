import React from "react";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import "../../Assets/css/Course.css"

const Course = () => {
    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="header">
                            <h1>Course Name</h1>
                            <p>Physiotherapy helps to restore movement and function when someone is affected by injury, illness or disability. It can also help to reduce your risk of injury or illness in the future. It takes a holistic approach that involves the patient directly in their own care.</p>
                            <h2>Description</h2>
                            <p>Physiotherapy helps to restore movement and function when someone is affected by injury, illness or disability. It can also help to reduce your risk of injury or illness in the future. It takes a holistic approach that involves the patient directly in their own care.</p>
                            <h2>Fees Structure:</h2>
                            <p>50,000</p>
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