import './App.css';
import Quote from './components/Quote';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import {fetchQuotes, fetchRandomQuote} from './fetchQuotes';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetchQuotes().then(data => setQuotes(data));
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetchRandomQuote().then(data => setRandomQuote(data));
    } catch (error) {
      setError(error);
    }
  }, []);

  const handleNewRandomQuote = async () => {
    try {
      const newRandomQuote = await fetchRandomQuote();
      setRandomQuote(newRandomQuote);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="wrapper" className="App">
      <div id="quote-box" className="quote-box">
        <Quote quote={randomQuote}/>
        <div className="buttons">
          <a href="twitter.com/intent/tweet" target="_top" className="button" id="tweet-quote">
            <i className="fa fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={handleNewRandomQuote}>New Quote</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
