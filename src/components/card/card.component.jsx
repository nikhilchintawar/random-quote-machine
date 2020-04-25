import React from 'react';
import "./card.styles.css";


const Card = ({quote, author, handleClick}) => {
    return (
        <div className="quote-box1">
        <div className="card">
        <h2>{quote}</h2>
        <span>{author}</span>
        <button className="new-quote-button" onClick={handleClick}>New quote</button>
        </div>
         
      </div>)
}

export default Card;