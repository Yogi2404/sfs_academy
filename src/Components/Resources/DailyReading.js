import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";


const DailyReading = () => {
    const openDR1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1EvqYOCxSU6UbQg69u9gijaq76itZi8qT/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Q8GJl97z39V5VZZCdQk8uhHWmlZodawU/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/12dnY-G1IpU2f4dStkbTIrUDap_pZGmP9/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1CmcI2t-LovmhMsvJYd77kHoB33kIPIp6/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1uJ1m_b7Ovz2oezy4DWI5OMeTmlb3szE6/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR6 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17fd69Bv2mROJ7x0bVIRxIXJrtstlYkup/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR7 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1UZnhyTWcja6LJF2DljJ0IdjfhYMERJi4/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR8 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1qaNz_xLpT6Au0AYE7HARD-yo9q6aJPdP/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR9 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1IXPplsKPe3m-JPDPA-qxEXABmbsuBee3/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR10 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1wIRKerWerTktWvk0GM8z2oR3j4AnlpPZ/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR11 = () => {
        const linkUrl = 'https://drive.google.com/file/d/19F9UB_NDdOTmNtLwM5W0OTdclgnDafx6/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR12 = () => {
        const linkUrl = 'https://drive.google.com/file/d/14j5xKsluUDioYOtN0bhsMtiGXMtSh3D8/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR13 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1wr5Ykc8vfB45Jqt0ONPNBTbQb9z2xIgu/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR14 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1dXBtj-SdyGNZuxqB5b57AiuMB42P0U9g/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR15 = () => {
        const linkUrl = 'https://drive.google.com/file/d/14j5xKsluUDioYOtN0bhsMtiGXMtSh3D8/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR16 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1E0zFCLYTGb2xQVKdvV1hLBpHfz1JNjF9/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR17 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1YbR8FzUkWlTY8Fxtt-zhGMBV6tSoaz2Y/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR18 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1bhOEbjP32U2o-DWDSq1_n7pn7mBhRseb/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR19 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1bhOEbjP32U2o-DWDSq1_n7pn7mBhRseb/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR20 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1-ptn6LdzBCwQlJtzc-enNIkv5XQstKva/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR21 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1bhOEbjP32U2o-DWDSq1_n7pn7mBhRseb/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR1}>
                        Closed vs Open Kinematic exercises.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR2}>
                        Dermatomes, Myotomes, Reflexes pdf.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR3}>
                        End Feel Magee 6th 24,25,35-37, 62.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR4}>
                        Ligament tear .pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR5}>
                        Kisner 7th 321-326 soft tissue , injury & repair management.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR6}>
                        Kisner 7th 344-347 fibromylgia and myofacial pain syndrome.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR7}>
                        Kisner 7th 344-347 fibromylgia and myofacial pain syndrome.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR8}>
                        Kendall Shoulder 314-330 MMT shouder girdle.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR9}>
                        Circle of Willis and hemisphere.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR10}>
                        Incoordination O_Sullivan 6th 211-213.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR11}>
                        Peripheral nerve injuries Kisner 7th 386-393.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR12}>
                        CRPS Kisner 7th 409-413.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR13}>
                        Kisner 7th 389-393.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR14}>
                        MMT Elbow Kendall Elbow 286-294.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR15}>
                        CRPS Kisner 7th 409-413.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR16}>
                        Obstructive vs Restrictive O_Sullivan 6th 487-495.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR17}>
                        Auscultation Hillegass 549-551.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR18}>
                        Cardiac physiology Hillegass 22, 42-44.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR19}>
                        Pulmonary Physiology Hillegass 9-11.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR20}>
                        Kendall Wrist and Hand 282-285.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR18}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DailyReading;