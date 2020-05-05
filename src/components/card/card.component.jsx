import React from 'react';
import "./card.styles.css";
import { randomColor} from '../../utils/randomColor';

const Card = ({quote, author, handleClick}) => {
  let color = randomColor()
    return (
        <div id="quote-box">
        <div className="card">
        <h2 style={{color: color}}>{quote}</h2>
        <span id="author">{author}</span>
        <button id="new-quote" onClick={handleClick} style={{backgroundColor: color}}>New quote</button>
        <button id="tweet-quote"><a href="http://twitter.com/intent/tweet">Tweet it</a></button>
        </div>
         
      </div>)
}

export default Card;


