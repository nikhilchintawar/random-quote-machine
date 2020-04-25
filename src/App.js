import React from 'react';
import './App.css';
import Card from "./components/card/card.component";

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      quotes: [],
      quote: '',
      author: '',
    }
  }

   


  componentDidMount(){    

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => data.quotes)
    .then(quotes => this.setState({quotes: quotes.map(quote => quote), quote: quotes[0].quote, author: quotes[0].author}))
    .catch(error => console.log(error)
    )
  }

  handleClick = () => {
    let randomQuote = Math.floor(Math.random() * this.state.quotes.length)
    this.setState({
      quote: this.state.quotes[randomQuote].quote, 
      author: this.state.quotes[randomQuote].author
    })}


  render(){
    return(     
      <div id="quote-box">
        <Card quote={this.state.quote} author= {this.state.author} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
