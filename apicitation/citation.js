async function fetchQuote() {
    try {
        const response = await axios.get('https://type.fit/api/quotes');
        const quotes = response.data;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const quoteText = quote.text;
        const quoteAuthor = quote.author;

        document.getElementById('quote-text').textContent = quoteText;
        document.getElementById('quote-author').textContent = quoteAuthor;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchQuote();

    document.getElementById('refresh-button').addEventListener('click', fetchQuote);
});