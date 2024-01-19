import React, { useState } from 'react';
import "../../Assets/css/Lectures.css";
import down from "../../Assets/icons/chevron-down.svg";
import RecordedLectures from './RecordedLectures';
import DemoLecture from './DemoLecture';
import ExtraLectures from './ExtraLectures';

const Lectures = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton((prevActiveButton) => (prevActiveButton === buttonNumber ? null : buttonNumber));
    };

    return (
        <div className="lectures-menu">
            <div className="button-content-container">
                <div
                    className={`content-but ${activeButton === 1 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    Recorded Lectures
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 1 && <div className="content"><RecordedLectures /></div>}

                <div
                    className={`content-but ${activeButton === 2 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    Demo Lectures
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 2 && <div className="content"><DemoLecture /></div>}

                <div
                    className={`content-but ${activeButton === 3 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(3)}
                >
                    Guest Lectures
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 3 && <div className="content"><ExtraLectures />  </div>}
            </div>
        </div>
    );
};

export default Lectures;
