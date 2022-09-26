import React from 'react'
import { useState } from 'react';
const Question = (props) => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = (id) => {
        setActive(!isActive)
    }
    return (
        <div id={props.id} className={isActive ? 'open item' : 'item'} onClick={() => handleClick(props.id)}>
            <p className="number">{props.id}</p>
            <p className="text">{props.question}</p>
            <svg className={isActive ? 'active icon' : 'icon'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>{props.answer}
                </p>
            </div>
        </div>
    )
}

export default Question
