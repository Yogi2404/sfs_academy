import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./utilities/Navbar";
import Footer from "./utilities/Footer";
import '../Assets/css/Main.css';
import phisio from '../Assets/img/Doctor-bro.svg';
import img2 from '../Assets/img/Online Doctor-pana.svg';
import img3 from '../Assets/img/Phisiotherapy-rafiki.svg';
import img4 from '../Assets/img/Phisiotherapy-pana.svg';
import img5 from '../Assets/img/Webinar-pana.svg';
import img6 from '../Assets/img/Reading glasses-bro.svg';
import logo from '../Assets/img/SFS Academy Logo (14).png';
import tt from '../Assets/img/Calendar-pana.svg';
import ReactPlayer from 'react-player';
import LoginModel from '../Components/User/LoginModal';
import RegisterModal from "./User/RegisterModal";

const Main = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const loggedIn = false;

    const openLoginModal = () => {
        setShowLoginModal(true);

    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };
    const openRegisterModal = () => {
        setShowRegisterModal(true);
        setShowLoginModal(false);
    };
    const closeRegisterModal = () => {
        setShowRegisterModal(false);
    };

    return (
        <div>
            <div className="navbar">
                <Navbar openLoginModal={openLoginModal} />
            </div>
            <a href="https://chat.whatsapp.com/GgDvuXUAG738AzpQJEC3TV" target="_blank" rel="noopener noreferrer">
                <button class="button2">
                    Join Group
                    <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z" fill="#fff"></path><path d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z" fill="#fff"></path><path d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z" fill="#cfd8dc"></path><path d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z" fill="#40c351"></path><path clip-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" fill-rule="evenodd" fill="#fff"></path>
                    </svg>
                </button>
            </a>
            <div className="col-lg-12 d-flex main-1">
                <div className="title col-lg-6">

                    <div className="d-flex logo wt">
                        <h1 className="wt">W</h1>
                        <div className="title-info">
                            <p>elcome to SFS Academy a physiotherapy academy serves as a </p><p className="description">specialized institution dedicated to the comprehensive education and training of aspiring physiotherapists. These academies play a pivotal role in shaping healthcare professionals who are proficient in assessing and treating a diverse range of musculoskeletal, neurological, and respiratory conditions.</p>
                        </div>
                    </div>

                    <div className="enroll-now">
                        <button>Enroll now for the Program</button>
                    </div>
                </div>
                <div className="col-lg-6 phisio">
                    <video width="640" height="360" controls>
                        <source src="../Assets/videos/demovideo.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="col-lg-12 d-flex main-2">
                <div className="col-lg-6 phi">
                    <img src={img2} />
                </div>
                <div className="col-lg-6">

                    <h1>Enhancing your Physiotherapy</h1>
                    <p className="phiso-info">Physiotherapy helps to restore movement and function when someone is affected by injury, illness or disability. It can also help to reduce your risk of injury or illness in the future. It takes a holistic approach that involves the patient directly in their own care.</p>
                    <div className="col-lg-12 d-flex">
                        <div className="col-lg-6 show">
                            <h3 className="mt">More Than</h3>
                            <h1 className="stu">300+</h1>
                            <h3 className="hs">Happy Students</h3>
                        </div>
                        <div className="col-lg-6 show ms-5">
                            <h3 className="mt">Interactive</h3>
                            <h1 className="stu">36</h1>
                            <h3 className="hs">Lectures</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 boxes main-3">
                <h1>Phisiotherapy Course and Resources</h1>
                <div className="d-flex box-container">
                    <div className="col-lg-4">
                        <div className="box1">
                            <img src={tt} />
                            <button>Check Timetable</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box2">
                            <img src={img5} />
                            <button>Recorded Lectures</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box3">
                            <img src={img6} />
                            <button>Get Resources</button>
                        </div>
                    </div>
                </div>
                <div className="gp">
                </div>

            </div>
            <div className="col-lg-12 d-flex main-4">
                <div className="col-lg-6">
                    <h1 className="nh">Need Help?</h1>
                    <h2 className="help">Want the mentor to help you out?</h2>
                    <p className="para">Are you struggling to find the best guidance and solution for how to proceed with the Enrollment or Credentialing? Contact us.</p>
                </div>
                <div className="col-lg-6">
                    <form className="form">
                        <h2 className="byf">Schedule Your Free</h2>
                        <h2 className="cons">Counselling</h2>
                        <label>
                            <input required="" placeholder="" type="text" className="input" />
                            <span>Your Name</span><span className="star">*</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="email" className="input" />
                            <span>Email</span><span className="star">*</span>
                        </label>

                        <label>
                            <input required="" placeholder="" type="number" className="input" />
                            <span>Phone Number</span><span className="star">*</span>
                        </label>
                        <label className="d-flex mb-3">
                            <div className="col-lg-6 pt-1">
                                <span>Schedule Date for meeting</span><span className="star">*</span>
                            </div>
                            <div className="col-lg-6">

                                <input required="" placeholder="" type="date" className="input" />
                            </div>
                        </label>
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
            {/* opening login model */}
            {showLoginModal && (
                        <LoginModel
                            isOpen={showLoginModal}
                            onClose={closeLoginModal}
                            onOpenRegister={openRegisterModal}
                            loggedIn={loggedIn}
                        />
                    )}

                    {showRegisterModal && (
                        <RegisterModal isOpen={showRegisterModal} onClose={closeRegisterModal} />
                    )}
        </div>
    );
};

export default Main;