import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import CustomeCaptch from '../Common/Captcha';
import FormField from "../Common/FormFields";
import { apiPost } from "../Utils/api";

function LoginModel({ isOpen, onClose, loggedIn, onOpenRegister }) {

    //#region UseState hooks variable

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const captchaRef = useRef(null);
    const navigate = useNavigate();


    const [captchaValueMain, setCaptchaValueMain] = useState('');
    const [captchaValueFromUser, setCaptchaValueFromUser] = useState('');
    const [isCaptchaMatched, setIsCaptchaMatched] = useState(true);

    //#endregion


    const handleCaptchaChange = (value) => {
        setCaptchaValueMain(value);
    };
    const style = {
        modelcss: {
            background: '#111'
        },
    }

    //#region Auth Methods
    const onLoginUser = () => {
        try {
            if (captchaValueFromUser !== captchaValueMain) {
                if (captchaRef.current) {
                    captchaRef.current.refreshCaptcha();
                }
                setCaptchaValueFromUser('');
                //ErrorNotification("Captcha Invalid");

            } else {
                //store user insert Input 
                const authCredential = {
                    email,
                    password
                }
                AuthenticationUser(authCredential);
            }

        } catch (error) {
            return error;
        }
    }

    const AuthenticationUser = async (userData) => {
        try {
            const response = await apiPost('/login', userData);
            if (response.success === true)
            {
                navigate('/dashboard');
            }
        } catch (error) {
            // Handle network errors or exceptions
            console.error('An error occurred:', error);
        }

    }


    //#endregion

    //return Rendering method 
    return (
        <>
            <div className={style.modelcss}>
                <Modal show={isOpen && !loggedIn} onHide={onClose} centered backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="off" // Corrected attribute and value
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            {/* <CustomeCaptch onCaptchaChange={handleCaptchaChange}
                                forwardedRef={captchaRef} />
                            <div>
                                <div className="row">
                                    <div className="col-5">
                                        <FormField
                                            fieldName="TextInput"
                                            name="captcha"
                                            id="captch"
                                            label="Captch :"
                                            value={captchaValueFromUser}
                                            onChange={(e) => setCaptchaValueFromUser(e.target.value)} />
                                    </div>
                                    <div className="col-5 text-center">
                                    </div>

                                </div>

                            </div> */}
                            <Button
                                variant="outline-secondary"
                                type="button"
                                className='mt-4'
                                onClick={onLoginUser}
                            >
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className="mt-3">New user? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={onOpenRegister}>Register here</span></p>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default LoginModel;
