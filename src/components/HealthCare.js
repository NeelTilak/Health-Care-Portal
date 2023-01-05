import "./css/HealthCareStyles.css";

import React from 'react'
import IntroImg from "../assets/heathcare-1.png"
import { Link } from "react-router-dom";


const HealthCare = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
            <p>Say yes to your good health!</p>
                <h1>HealthCare Portal With AI Chatbot</h1>
               
                <div>
                    <Link to="/tools" className="btn">Tools</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HealthCare