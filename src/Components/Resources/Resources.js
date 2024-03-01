import React, { useState } from 'react';
import "../../Assets/css/Resources.css";
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import Lectures from './Lectures';
import Notes from './Notes';

const Resources = () => {
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
            </div>
            <div className="r-footer">
                <Footer />
            </div>
        </div>
    );
};

const Menu = ({ activeSection, onSectionClick }) => {
    return (
        <div>

            <div className="resource-menu">
                <button className={activeSection === 1 ? 'active' : ''} onClick={() => onSectionClick(1)}>
                    Lectures
                </button>
                <button className={activeSection === 2 ? 'active' : ''} onClick={() => onSectionClick(2)}>
                    Notes
                </button>
            </div>

        </div>
    );
};

const Section1Content = () => {
    return <div><Lectures /></div>;
};

const Section2Content = () => {
    return <div><Notes /></div>;
};


export default Resources;
