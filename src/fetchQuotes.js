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
    console.log(process.env.REACT_APP_API_KEY)
    const response = await fetch('http://localhost:8000/api/random_quote/', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,  // Use Bearer Token
        "Content-Type": "application/json",
      },
    });

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
