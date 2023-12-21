import React, { useState, useEffect } from 'react';
import '../../Assets/css/Captcha.css';

const CaptchaBox = ({ onCaptchaChange, forwardedRef }) => {
    const [captchaText, setCaptchaText] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);




    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Excluding similar-looking characters
        let captcha = '';
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters.charAt(randomIndex);
        }
        setCaptchaText(captcha);
        onCaptchaChange(captcha);
    }
    // Attach the method to the forwardedRef


    const refreshCaptcha = () => {
        generateCaptcha();
    };

    React.useImperativeHandle(forwardedRef, () => ({
        refreshCaptcha
    }));


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="captcha-box" style={{ margin: '10px 0' }}>
                        <br />
                        <div className="captcha-text">
                            <span className="first-two">{captchaText.substring(0, 2)}</span>
                            <span className="third">{captchaText.charAt(2)}</span>
                            <span className="fourth">{captchaText.charAt(3)}</span>
                            {captchaText.substring(4)}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="refresh-button" type='button' onClick={refreshCaptcha}>
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaptchaBox;
