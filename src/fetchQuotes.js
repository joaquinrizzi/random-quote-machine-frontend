const fetchQuotes = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/quotes/');
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};

const fetchRandomQuote = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/random_quote/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random quote:', error);
    throw error;
  }
};

export { fetchQuotes, fetchRandomQuote };
