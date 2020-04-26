import React from 'react';
import './App.css';
import Card from "./components/card/card.component";

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
  }


  render(){
    return(     
      <div>
        <Card quote={this.state.quote} author= {this.state.author} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
