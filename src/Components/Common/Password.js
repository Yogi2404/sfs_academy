// PasswordInputWithToggle.js
import React, { useState } from 'react';
import EyeOpen from "../../Assets/icons/eye.svg";
import EyeClose from "../../Assets/icons/eye-off.svg";
import '../../Assets/css/PasswordShow.css';
import { Icon } from '@react-pdf-viewer/core';

const Password = ({ id, label, requiredInd, placeholder, value, onChange, inputDisabled, hasError, showErrorMsg }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onValueChange = (e) => {
        let value = e.target.value;
        onChange(value);
    };

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label> {requiredInd ? <span className="text-danger">*</span> : null}
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onValueChange}
                    disabled={inputDisabled}
                />
                <div className="input-group-append mt-2">
                    <span className="password-button" onClick={() => setShowPassword(!showPassword)}>
                        <img src={showPassword ? EyeOpen : EyeClose} className="eye-icon" />
                    </span>
                </div>
            </div>
            {hasError && <div id={id} className="form-text text-danger">{showErrorMsg}</div>}
        </div>
    );
};

export default Password;
