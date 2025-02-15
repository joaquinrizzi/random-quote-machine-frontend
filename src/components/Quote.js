import React from 'react';
import { QuoteBox, QuoteText, QuoteAuthor } from '../styles/Quote.styled';

const Quote = ({ quote }) => {
  return (
    <QuoteBox>
      <QuoteText className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{quote.content}</span>
      </QuoteText>
      <QuoteAuthor className="quote-author">
        &mdash; <span id="author">{quote.author}</span>
      </QuoteAuthor>
    </QuoteBox>
  );
};

export default Quote;
