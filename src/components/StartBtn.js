import "./StartBtn.css";

const StartBtn = () => {
    return (
        <>
            <div class="img-container">
                <img
                    id="start-btn"
                    className="startbtn"
                    src="https://i.ibb.co/ZKNdzPR/start-button-without-play.png"
                    alt="start button"
                />
                <img
                    id="play-btn"
                    className="playbtn"
                    src="https://i.ibb.co/M5fhCSf/start-button-play-only.png"
                    alt="play button"
                />
            </div>
        </>
    );
};

export default StartBtn;

/*
<a href="https://imgbb.com/"><img src="https://i.ibb.co/M5fhCSf/start-button-play-only.png" alt="start-button-play-only" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/ZKNdzPR/start-button-without-play.png" alt="start-button-without-play" border="0"></a></a>
*/
