import React from 'react';
import "./card.styles.css";


const Card = ({quote, author, handleClick}) => {
    return (
        <div id="quote-box">
        <div className="card">
        <h2 id="text">{quote}</h2>
        <span id="author">{author}</span>
        <button id="new-quote" onClick={handleClick}>New quote</button>
        <button id="tweet-quote"><a href="http://twitter.com/intent/tweet">Tweet it</a></button>
        </div>
         
      </div>)
}

export default Card;