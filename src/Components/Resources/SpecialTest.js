import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";


const SpecialTest = () => {

    const openST1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/16j2qzVt8TeOxeJci5YF6KIm1y9g-6XcA/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openST1}>
                        Special Test SFS Academy
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialTest;