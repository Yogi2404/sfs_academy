import React, { useState } from 'react';
import "../../Assets/css/ReviewMain.css";
import ReviewComments from './ReviewComments';
import ReviewPhotos from './ReviewPhotos';
import ReviewVideos from './ReviewVideos';
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";

const ReviewMain = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionClick = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <Menu activeSection={activeSection} onSectionClick={handleSectionClick} />
            <div className="content">
                {activeSection === 1 && <Section1Content />}
                {activeSection === 2 && <Section2Content />}
                {activeSection === 3 && <Section3Content />}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

const Menu = ({ activeSection, onSectionClick }) => {
    return (
        <div>

            <div className="menu">
                <button className={activeSection === 1 ? 'active' : ''} onClick={() => onSectionClick(1)}>
                    Comments
                </button>
                <button className={activeSection === 2 ? 'active' : ''} onClick={() => onSectionClick(2)}>
                    Photos
                </button>
                <button className={activeSection === 3 ? 'active' : ''} onClick={() => onSectionClick(3)}>
                    Videos
                </button>
            </div>

        </div>
    );
};

const Section1Content = () => {
    return <div><ReviewComments /></div>;
};

const Section2Content = () => {
    return <div><ReviewPhotos /></div>;
};

const Section3Content = () => {
    return <div><ReviewVideos /></div>;
};

export default ReviewMain;
