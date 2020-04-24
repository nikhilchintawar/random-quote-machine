import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends React.Component{
  constructor(){
    super();
    this.state= {
      quotes: []
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => data.quotes)
    .then(quotes => this.setState({ quotes: quotes}))
    .catch(error => console.log(error)
    )
  }

  handleClick = (event) => {

  }

  render(){
    let my = this.state.quotes.map((myQuote, index) => (
      <h2 key={index}>{myQuote.quote} - {myQuote.author}</h2>))   
    return(     
      <div id="quote-box">
        <CardList quotes={this.state.quotes}/>
         <div>{my}</div>
        <button id="new-quote" onClick={this.handleClick}>New quote</button>
        <button id="tweet-quote"><a href="twitter.com/intent/tweet">t</a></button>
      </div>
    )
  }
}

export default App;
