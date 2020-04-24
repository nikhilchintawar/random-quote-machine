import React from 'react';



const Card = ({myQuotes}) => {
    const { quote, author } = myQuotes;
   return (<div>
        <div id="quote-box">
         <h2>{quote}</h2>
         <p>{author}</p>
        {/* <button id="new-quote" onClick={this.handleClick}>New quote</button> */}
        <button id="tweet-quote"><a href="twitter.com/intent/tweet">t</a></button>
      </div>
    </div>)
}

export default Card;