import styled from 'styled-components';

export const QuoteBox = styled.div`
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
`;

export const QuoteText = styled.div`
  text-align: center;
  width: 450px;
  height: auto;
  clear: both;
  font-weight: 500;
  font-size: 1.75em;

  & i {
    margin-right: 5px;
  }
`;

export const QuoteAuthor = styled.div`
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  text-align: right;
`;
