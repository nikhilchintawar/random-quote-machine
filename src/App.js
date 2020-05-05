import React from 'react';
import './App.css';
import Card from "./components/card/card.component";
import {randomColor} from "./utils/randomColor";

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      quote: '',
      author: '',
    }
  }

   


  componentDidMount(){    
    this.getQuote()
    randomColor()
  }
    getQuote(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
      let quotesData = data.quotes
      let quoteNum = Math.floor(Math.random() * quotesData.length)
      let randomQuote = quotesData[quoteNum]
      this.setState({
        quote: randomQuote['quote'],
        author: randomQuote['author']
      })
    })
    .catch(error => console.log(error)
    )
  }

  handleClick = () => {
   this.getQuote()
   randomColor()
  }
  render(){
    const { quote, author } = this.state;
    return(           
      <div style={{ backgroundColor: randomColor()}}>
        <Card quote={quote} author= {author} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;


