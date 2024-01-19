import React from "react";
import NavbarItems from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";

const ComingSoon = () => {
    return (
        <div>
            <div className="navbar">
                <NavbarItems />
            </div>
            <div className="coming-soon-main">
                Content of this page will be Coming Soon!!!
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default ComingSoon;