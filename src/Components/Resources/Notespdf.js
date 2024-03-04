import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";

const Notespdf = () => {

    const openN1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17DtYV_LKH4iPHqpRbVesMwOhPLoKS4VG/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openN2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1tZ52nzMi-dwURFoMNYYDP_vxT5bz5R1q/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openN3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Dgem1uvWmsItLAkgatSc4ZTbZYxpQ6I3/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openN4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1MDiSNCT4xIGyGFuWvHFGlqVCY-QaMaai/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openN5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Z8C64okQ01GrvahFX2Ntc-vNW8xkPdHw/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };





    return (
        <div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
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
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
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