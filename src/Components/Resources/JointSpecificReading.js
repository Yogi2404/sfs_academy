import React, { useState } from "react";


const JointSpecificReading = () => {

    const openJSR1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Bnz-gtIlPAIkMJoDQaCLKl788XYAGQrJ/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div className="notes">
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR1}>
                    shoulder joint.pdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JointSpecificReading;