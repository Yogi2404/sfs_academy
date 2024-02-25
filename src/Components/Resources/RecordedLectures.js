import React from "react";
import lecture1img from "../../Assets/img/lecture/lecture1ss.jpg";
import lecture2img from "../../Assets/img/lecture/Screenshot Capture - 2024-02-25 - 19-59-46.png"
import "../../Assets/css/RecordedLectures.css";

const RecordedLectures = () => {

    const openLinkInNewTab = () => {
        const linkUrl = 'https://drive.google.com/file/d/1TexmylPwJu0KtwOb_-oUJz5WR5kn811r/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1QevB7CBrQIFp4DMV6BjPhW_ThLLp5Sl1/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div className="lectures">
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 1 (18-02-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab} src={lecture1img} width={300} height={200} />
                            <button onClick={openLinkInNewTab} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 2 (25-02-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab2} src={lecture2img} width={300} height={200} />
                            <button onClick={openLinkInNewTab2} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab} class="rcard-button">Revise ▶️</button>
                </div>
            </div>

        </div>


    )
}

export default RecordedLectures;