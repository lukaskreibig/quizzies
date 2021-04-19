import React from "react";
import styles from "./StartBtn.css";

const StartBtn = () => {
    const [spin, setSpin] = React.useState(0);
    return (
        <img
            id="start-btn"
            className={styles.startbtn}
            src="https://i.ibb.co/cLQ05RM/start-button.png"
            alt="start button"
            onClick={() => setSpin(1)}
            onAnimationEnd={() => setSpin(0)}
            spin={spin}
        />
    );
};

export default StartBtn;
