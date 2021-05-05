import React from 'react'

const AboutUs = () => (
    const Contact = (props) => {
        return ( <
                div className = "Contact" >
                <
                img alt = "avatar"
                className = "avatar"
                src = { props.avatar }
                />

                <
                div >
                <
                p className = "name" > { props.name } < /p> {
                props.online ? ( <
                    div className = "status" >
                    <
                    div className = "status-online" > < /div> <
                    p className = "status-text" > Online < /p> < /
                    div >
                ) : ( <
                    div className = "status" >
                    <
                    div className = "status-offline" > < /div> <
                    p className = "status-text" > Offline < /p> < /
                    div >
                )
            } <
            /div> < /
        div >
    );
};

export default Contact;