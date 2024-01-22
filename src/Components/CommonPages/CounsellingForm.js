import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import instance from "../../Config/axiosconfig";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CounsellingForm = () => {

    const [label, setLabel] = useState(''); // Set your default label here
    const [error, setErrors] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [consultationDate, setConsultationDate] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await instance.post("/appointment", { fullName, email, mobileNumber, consultationDate });
            console.log(response);
            toast.success('Appointment successfully Scheduled!', { position: "top-right" });
        } catch (e) {
            console.log(e);
            toast.error('Error submitting appointment. Please try again.', { position: "top-right" });
        }
    };

    return (
        <>
            <div className="cf-pcf">
                <FormFields
                    fieldName="TextInput"
                    id="fullName"
                    name="fullName"
                    label={label ? label : "Name"}
                    requiredInd={true}
                    value={fullName}
                    placeholder={label ? label : "Enter your Full Name"}
                    onChange={(e) => setFullName(e.target.value)}
                    showErrorMsg={error && !fullName.trim() ? "Required!" : ""}
                />
                <FormFields
                    fieldName="TextInput"
                    id="email"
                    name="email"
                    label={label ? label : "E-Mail"}
                    requiredInd={true}
                    value={email}
                    placeholder={label ? label : "Enter your Mail-ID"}
                    onChange={(e) => setEmail(e.target.value)}
                    showErrorMsg={error && !email.trim() ? "Required!" : ""}
                />
                <FormFields
                    fieldName="TextInput"
                    id="mobileNumber"
                    name="mobileNumber"
                    label={label ? label : "Mobile Number"}
                    requiredInd={true}
                    value={mobileNumber}
                    placeholder={label ? label : "Enter your Mobile Number"}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    showErrorMsg={error && !mobileNumber.trim() ? "Required!" : ""}
                />
                <FormFields
                    fieldName="DateInput"
                    id="consultationDate"
                    name="consultationDate"
                    label={label ? label : "Schedule Date for Meeting"}
                    requiredInd={true}
                    value={consultationDate}
                    placeholder={label ? label : "YYYY-MM-DD"}
                    onChange={(e) => setConsultationDate(e.target.value)}
                    showErrorMsg={error && !consultationDate.trim() ? "Required!" : ""}
                />
                <div className="counseling-time">
                    [9:00pm - 10:00pm (IST) from Monday to Saturday]
                </div>
                <button
                    className="button-submit"
                    onClick={handleSubmit}>Schedule Meeting !
                </button>
            </div>
        </>
    );
};

export default CounsellingForm;