import React from "react";
import lecture1img from "../../Assets/img/lecture/lecture1ss.jpg";
import "../../Assets/css/RecordedLectures.css";

const RecordedLectures = () => {

    const openLinkInNewTab = () => {
        const linkUrl = 'https://drive.google.com/file/d/1TexmylPwJu0KtwOb_-oUJz5WR5kn811r/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 1 (18-01-2024)</p>
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

        </div>


    )
}

export default RecordedLectures;