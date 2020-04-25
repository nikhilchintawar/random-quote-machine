import React from 'react';
import Card from '../card/card.component';


const CardList = ({quotes}) => {     
    return <div>
        {
            quotes.map((myQuote, index) => <Card key={index} myQuotes={myQuote} />) 
        }
    </div>
}

export default CardList;