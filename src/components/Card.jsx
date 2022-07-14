import React from "react"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={Katie} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Kate Zaferes</p>
            <p><span className="bold">From $136 / person</span></p>
        </div>
    )
}