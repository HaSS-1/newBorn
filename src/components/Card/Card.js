import "./Card.css"

import { FaBeer, FaStar, FaEye, FaBaby } from "react-icons/fa"


const Card = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className="most-popular-item-img" src={props.image} />
                <div className="most-popular-content">
                    <h4 className="most-popular-item-title">
                        {props.title} <br />
                        <span>{props.technology}</span>
                    </h4>
                    <ul>
                        <li><span style={{ "color": "yellow" }}><FaBeer /></span> <span>{props.date}</span></li>
                        <li><span style={{ "color": "var(--color-primary)" }}><FaEye /></span><span>{props.version}</span></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Card