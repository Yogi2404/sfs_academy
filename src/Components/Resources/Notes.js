import React, { useState } from 'react';
import "../../Assets/css/Lectures.css";
import down from "../../Assets/icons/chevron-down.svg";
import DailyReading from './DailyReading';
import Notespdf from './Notespdf';
import JointSpecificReading from './JointSpecificReading';
import ConvexConcaveRule from './ConvexConcaveRule';
import SpecialTest from './SpecialTest';
import Books from './Books';


const Notes = () => {
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
                    Notes
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 1 && <div className="content"><Notespdf /></div>}

                <div
                    className={`content-but ${activeButton === 2 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    Daily Reading
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 2 && <div className="content"><DailyReading /></div>}

                <div
                    className={`content-but ${activeButton === 3 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(3)}
                >
                    Joint Specific Reading
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 3 && <div className="content"><JointSpecificReading />  </div>}
                <div
                    className={`content-but ${activeButton === 4 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(4)}
                >
                    Convex Concave Rule for all Joints
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 4 && <div className="content"><ConvexConcaveRule />  </div>}
                <div
                    className={`content-but ${activeButton === 5 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(5)}
                >
                    Special Test
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 5 && <div className="content"><SpecialTest />  </div>}
                <div
                    className={`content-but ${activeButton === 6 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(6)}
                >
                    Books
                    <img className="cheron-down-icon" src={down} />
                </div>
                {activeButton === 6 && <div className="content"><Books />  </div>}
                
            </div>
        </div>
    );
};

export default Notes;
