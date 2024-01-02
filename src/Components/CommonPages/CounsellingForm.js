import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import instance from "../../Config/axiosconfig";

const CounsellingForm = () => {

    const [label, setLabel] = useState(''); // Set your default label here
    const [error, setErrors] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [consultationDate, setConsultationDate] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await instance.post("auth/login", { fullName, email, mobileNumber, consultationDate })
                console.log(response)
        } catch (e) {
            console.log(e)
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
                    placeholder={label ? label : "Select your Date"}
                    onChange={(e) => setConsultationDate(e.target.value)}
                    showErrorMsg={error && !consultationDate.trim() ? "Required!" : ""}
                />
                <button
                    className="button-submit"
                    onClick={handleSubmit}>Submit
                </button>
            </div>
        </>
    );
};

export default CounsellingForm;