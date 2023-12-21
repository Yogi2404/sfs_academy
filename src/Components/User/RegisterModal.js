import React, { useEffect, useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { apiPost } from '../Utils/api';
import { Link, useNavigate } from "react-router-dom";


function RegisterModal({ isOpen, onClose, onOpenLogin, onOpenRegister, loggedIn }) {
    //#region 
    const [roleid, setRoleId] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mobileno, setMobileNumber] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);

    const [error, setError] = useState(null);

    const [roles, setRoles] = useState([]);

    const navigate = useNavigate();

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    // useEffect(() => {
    //     fetch(`${config.baseUrl}/getRoles`)
    //         .then(response => response.json())
    //         .then(data => {
    //             const hardCodedRole = { roleid: 0, rolename: "Select Role" };
    //             const rolesWithHardCoded = [hardCodedRole, ...data];
    //             //console.log("Roles with hard-coded:", rolesWithHardCoded);
    //             setRoles(rolesWithHardCoded);
    //         })
    //         .catch(error => {
    //             log.error(error);
    //         });
    // }, [roleid]);
    // const handlerolechange = (selectedOption) => {
    //     setRoleId(selectedOption.value);
    //     //console.log("Select " + selectedOption.value);
    // }



    const handleRegister = () => {
        // Display the selected role ID
        if (isValidDateValue()) {
            const newUser = {
                firstname,
                lastname,
                email,
                mobileno,
                password
            };
            RegisteNewUser(newUser);

        }
    }

    const isValidDateValue = () => {
        if (!firstname || firstname < 1) {
            //ErrorNotification("Please enter a valid name");
            return false;
        }

        return true;
    }

    const RegisteNewUser = async (newUser) => {
        try {
            const response = await apiPost('/register', newUser);
            if (response.status === "ok") {
                //SuccessNotification("Register Done!");
                onClose();
                navigate('/');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Handle 401 Unauthorized error
                //ErrorNotification('Unauthorized. Please check your credentials.');
            } else {
                // Handle other errors
                //ErrorNotification('An error occurred while processing your request.');
            }
        }
    }


    return (
        <Modal show={isOpen && !loggedIn} onHide={onClose} centered backdrop="static" keyboard={false}
            size='xl'>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <Row>
                        <Col>
                            {/* First Name  */}
                            <Form.Group className='mt-2'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name"
                                    name="firstname"
                                    id="firstname"
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>
                            {/* Email */}
                            <Form.Group className='mt-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email "
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            {/* password */}
                            <Form.Group className='mt-2'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    id="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            {/* Lastname */}
                            <Form.Group className='mt-2'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name"
                                    name="lastname"
                                    id="lastname"
                                    onChange={(e) => setLastName(e.target.value)} />
                            </Form.Group>
                            {/* Mobile no */}
                            <Form.Group className='mt-2'>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile Number"
                                    name="mobilenumber"
                                    id="mobilenumber"
                                    onChange={(e) => setMobileNumber(e.target.value)} />

                            </Form.Group>
                            {/* confirm Password */}
                            <Form.Group className='mt-2'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    id="conf_password"
                                />
                            </Form.Group>
                        </Col>
                   </Row>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className='mt-4 w-20' onClick={handleRegister}>
                    Register
                </Button>
                {/* <p className="mt-3">Existing user? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={{ openGlobalLoginModal }}>Login here</span></p> */}
            </Modal.Footer>

        </Modal>
    );
}

export default RegisterModal;
