import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./utilities/NavbarItems";
import Footer from "./utilities/Footer";
import '../Assets/css/Main.css';
import phisio from '../Assets/img/phisioimg.jpg';
import top from '../Assets/img/faisal.png';
import VideoPlayer from './Common/VideoPlayer';
import MyVideo from '../Assets/videos/demovideo.mp4';
import VideoThumb from '../Assets/videos/Kalamkaar-releases-latest-song-No-Mercy-under-tunnel-vision-860x484.webp';
import CounsellingForm from './CommonPages/CounsellingForm';
import "../Assets/css/Animations.css";
import physio from "../Assets/img/woman-having-physiotherapy-session-clinic.jpg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const loggedIn = false;

    const navigate = useNavigate();

    const handleGotoTimeTable = () => {
        // Use the history object to navigate to another page
        navigate('/time-table');
    };

    const handleGotoCourse = () => {
        navigate('/login');
    };

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
            <div>
                {/* ... (your other components) */}
                <ToastContainer />
            </div>
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
            <div className="container-fluid">
                <div className="row main-1">
                    {/* Left Column */}
                    <div className="col-lg-6 left-side">
                        <h1>Welcome to SFS Academy</h1>
                        <p className="text-wrap">
                            It is an online academy which serves as a specialized platform dedicated to the comprehensive education and training of aspiring Physiotherapists in clinical and academics. Our Academy offers a program that is as per the compiled blueprints of International standards which creates a pathway to achieve success in becoming a licensed PT across the globe. Our academy focuses on enhancing Physiotherapy knowledge for better strategies in Rehabilitation.
                        </p>
                        <div className="enroll-now"><button onClick={handleGotoCourse}>Enroll now for the Program</button></div>
                    </div>
                    {/* Right Column */}
                    <div className="col-lg-6 d-flex right-side portfolio">
                        <div className="col-lg-6">
                            <img src={top} alt="Your Image Description" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 sfs-info">
                            <div className="text-wrap">
                                <h4>Dr. Shahfaisal Saifee (PT)</h4>
                            </div>
                            <div className="text-wrap">
                                <h4>11+ years of Experience</h4>
                            </div>
                            <div className="text-wrap">
                                <h4>
                                    BPTh, MPTh, MBA Healthcare Management (IIM) Lucknow
                                </h4>
                            </div>
                            <div className="text-wrap">
                                <h4>Currently Leading Department of Quality and Training at a Healthcare Company</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row main-2">
                    {/* Left Column */}
                    <div className="col-lg-6 left-side">
                        <img src={physio} alt="Your Image Description" className="img-fluid" />
                    </div>
                    {/* Right Column */}
                    <div className="col-lg-6 right-side">
                        <h1>Why choose us?</h1>
                        <p className="text-wrap">
                            <ul>
                                <li>Our dedicated and highly skilled staff have good clinical exposure.</li>
                                <li>A thorough understanding of what is required for enhancing clinical practice.</li>
                                <li>Our founder is relentless and enthusiastic at resolving issues and doubts both inside and outside the classroom.</li>
                                <li>We also emphasize sharpening the management skills of our aspirants.</li>
                                <li>We believe in bridging the gap between your academic and clinical knowledge.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row main-3">
                    {/* Left Column */}
                    <div className="col-lg-6 left-side">
                        <h1>Enhancing your Physiotherapy</h1>
                        <p className="text-wrap">
                            We offer variety of Resources, Live Lectures, Structured Study Material, Question solving strategies which will contain academic and practical insights. Our high quality and affordable online tutoring is provided by proficient tutors with a long standing clinical experience. Content is well curated and paced. A new perspective with clinical relevance will be a good add on to clinical practice.
                        </p>
                        <div className="col-lg-12 d-flex thpiol">
                            <div className="col-lg-6 thpiol-left">
                                <h3 className="mt">Interactive</h3>
                                <h1 className="stu">Online</h1>
                                <h3 className="hs">Lectures</h3>
                            </div>
                            <div className="col-lg-6 thpiol-right">
                                <h3 className="mt">Trained</h3>
                                <h1 className="stu">100+</h1>
                                <h3 className="hs">Physiotherapists</h3>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="col-lg-6 right-side">
                        <img src={phisio} alt="Your Image Description" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row main-4">
                    {/* Left Column */}
                    <div className="col-lg-6 left-side">
                        <h1>SFS Academy offers</h1>
                        <p className="text-wrap">
                            <ul className="course-offering d-flex justify-content-center container-fluid">
                                <li className="text-wrap">Musculoskeletal</li>
                                <li className="text-wrap">Cardio Pulmonary and Vascular</li>
                                <li className="text-wrap">Neurology(Adult and Pedeatrics)</li>
                                <li className="text-wrap">Comunity Rehabilitation (Women's Health, Geritraics, Ergonomics) </li>
                                <li className="text-wrap">Manual Therapy</li>
                                <li className="text-wrap">Psycology (Human Behaviour Analysis) </li>
                                <li className="text-wrap">Gait/Posture</li>
                                <li className="text-wrap">Non-System and Other System Conditions </li>
                                <li className="text-wrap">Anatomy / Physiology / Bio-Mechanincs</li>
                                <li className="text-wrap">Ethics</li>
                                <li className="text-wrap">Treatment Theories and Strategies</li>
                                <li className="text-wrap">Electro Therapy </li>
                                <li className="text-wrap">Infection Control </li>
                                <li className="text-wrap">Indications and Contra-Indications</li>
                            </ul>
                        </p>


                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6 right-side">
                        <h2 className="byf">Schedule Your Free</h2>
                        <h2 className="cons">Counselling for clearing any doubts</h2>
                        <div className="counselling-form">
                            <CounsellingForm />
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Main;