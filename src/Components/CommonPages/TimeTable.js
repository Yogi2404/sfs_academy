import React from "react";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import "../../Assets/css/TimeTable.css"

const TimeTable = () => {
    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-time-table">
                <table className="time-table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Topic Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Data 1</td>
                            <td>Data 2</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Data 3</td>
                            <td>Data 4</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Data 5</td>
                            <td>Data 6</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default TimeTable;