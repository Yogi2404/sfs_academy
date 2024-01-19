import React from "react";
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "../../Assets/css/TermsAndConditions.css";

const TermsAndConditions = () => {
    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="tac-main">
                <div className="terms-conditions">
                    <h3>Terms and conditions</h3>
                    <ol>
                        <li>Cancellation : If you want to cancel your registration please mail us at support@sfsacademy.in within 15 days of the program has started</li>
                        <li>⁠As per the policy of our company 15% of the fees will be debited and the remaining amount will be refunded within 7 working days. </li>
                        <li>Anyone found using SFS Academy’s study material for any sort of teaching, publicity, promotions or marketing strict legal actions will be taken.</li>
                        <li>⁠Lecture recordings or screen sharing are prohibited anyone found recording the lecture or sharing screens will be debarred from the course and fees will be refunded.</li>
                        <li>This course doesn’t ensure any success guarantee in any of the licensed exams in which the PT will appear.</li>
                        <li>Participant will be allowed to attend live lectures only for 4 months from the time of enrolment.</li>
                        <li>Post 15 days of start of program no cancellation requests will be accepted.</li>
                        <li>Download of specific study material will be allowed.</li>
                        <li>⁠If a participant shares their login details with an unenrolled participant the enrolled participant will be debarded.</li>
                        <li>⁠If a participant is found running the same program under any company name will be debarded and legal actions will be taken.</li>
                        <li>⁠Practical hands on session will not be provided.</li>
                        <li>⁠Lecture cancellation or rescheduling will be decided by the director of the company. </li>
                        <li>Any changes in the program content will only be decided by the director of the company participants will not decide any changes in the content.</li>
                        <li>Any integrity breach by any participant will be prohibited to access the program and study material and fees will not be refunded.</li>
                        <li>⁠If the participant meets with the an accident or any medical condition which will allow the participant to opt out from the course company<br /> will take the decision on refunding the fees only if relevant medical documents are provided.</li>
                        <li>If a participant faces any difficulty in relation to internet connectivity, in such situations company will not be responsible.</li>
                        <li>⁠Discussion and explanation in the program is a reference it won’t be considered as a final word final decision will be of the participant<br /> how he or she will use that reference in their clinical practice.</li>
                        <li>⁠The clinical knowledge shared in the program is situational based which will vary from patient to patient  where the participant<br /> should use it’s own judgment skill if that clinical information need to be applied or not.</li>
                        <li>SFS Academy doesn’t have any parent company or any substitute branches, if any participant is been asked for additional payments<br /> under the banner of the company in such cases company will not be responsible.</li>
                        <li>SFS Academy doesn’t give any assurance of any kind of employment after finishing the program.</li>
                        <li>This program is not equivalent to any degree course or diploma course, it is purely a tutoring program.</li>
                        <li>⁠Mentorship is not included under this program, additional charges will be applicable for any kind of mentorship.</li>
                        <li>Participants can not demand any kind of special lectures or study material other than the program content.</li>
                        <li>Certification or credit hours for any educational or professional purpose will not be provided.</li>
                    </ol>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default TermsAndConditions;