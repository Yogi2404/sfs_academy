import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";

const Notespdf = () => {

    const openN1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17Wvz9HKJjwgfNlHO6gtVm0dYt3KpDnSB/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openN2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1XcTVHH_iMxBYAve889AAaP1wrWK-wzjl/view?usp=drive_link';
        window.open(linkUrl, '_blank');
    };
    const openN3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1ubasiEcDOYpJhlJEvxnG6jwbllK0217k/view?usp=drive_link';
        window.open(linkUrl, '_blank');
    };
    const openN4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1EXEse68uL0an6Lf0vyjavBjcwA-gfvqX/view?usp=drive_link';
        window.open(linkUrl, '_blank');
    };
    const openN5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1brsmzmpUeH4Xv2KLU8x93yQ7H5Nf6cdq/view?usp=drive_link';
        window.open(linkUrl, '_blank');
    };





    return (
        <div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openN1}>
                        EARLY POST OPP PRECAUTIONS AFTER THA.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openN2}>
                        EXERCISE PRESCRIPTION BASED ON BLOOD PARAMETERS.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openN3}>
                        INDICATIONS OF IONTOPHORESIS.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openN4}>
                        SCAPULAR DYSKINESIA.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openN5}>
                        SPORTS ACTIVITIES POST THR.pdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notespdf;