import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";


const DailyReading = () => {

    const [pdfFile, setPDFFile] = useState(null)
    const [ViewPdf, setViewPDF] = useState(null)

    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
    }

    return (
        <div>
            <form>
                <input type="file" className="form-control" onChange={handleChange} />
                <button type="submit" className="btn btn-success">View PDF</button>
            </form>
            <h2>View PDF</h2>
            <div className="pdf-container">

            </div>
        </div>
    )
}

export default DailyReading;