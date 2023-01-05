import React from 'react'

import { Link } from "react-router-dom"
import React1 from "../assets/React1.jpg"
import React2 from "../assets/React2.jpg"
import "./css/DetailStyles.css"

const Detail = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>About Project</h1>
                <p> Our project focuses on providing the users immediate and accurate prediction of the diseases based on their symptoms. For the prediction of diseases. Chatbots can play a major role in reshaping the healthcare industry by providing predictive diagnosis.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React2} classname="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React1} classname="img" alt="true" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail