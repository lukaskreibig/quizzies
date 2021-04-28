import { FaBlackberry } from "react-icons/fa";
import { Redirect } from "react-router";
import SocialFollow from "./SocialFollow";






const Footer = () => {
    return (
        <div className="main-footer">
            <hr id="line-one-footer" /> 
            <div className="footer-content">
                <SocialFollow />
            </div>
            <div className="row">
                <p className="col-sm">
                &copy;{new Date().getFullYear} WILD TRIVIAL INC | All rights reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>
    );
}

export default Footer;
