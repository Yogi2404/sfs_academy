import React from "react";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import "../../Assets/css/TimeTable.css";
import NavbarItems from "../utilities/NavbarItems";

const TimeTable = () => {
    return (
        <div>
            <div className="navbar">
                <NavbarItems />
            </div>
            <div className="main-time-table">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th className="srno" scope="col">Sr. No.</th>
                                <th className="tn" scope="col">Topic Name</th>
                                <th className="d" scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="srno" scope="row">1</th>
                                <td className="text">Cell</td>
                                <td className="text">Cell</td>
                            </tr>
                            <tr>
                                <th className="srno" scope="row">2</th>
                                <td className="text">Cell</td>
                                <td className="text">Cell</td>
                            </tr>
                            <tr>
                                <th className="srno" scope="row">3</th>
                                <td className="text">Cell</td>
                                <td className="text">Cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tt-footer">
                <Footer />
            </div>
        </div>
    );
};

export default TimeTable;