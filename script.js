API_URL = "https://book-quote-api.vercel.app/get-quotes";

quote_output = document.querySelector(".quote-output");
quote = quote_output.querySelector(".quote");
author = quote_output.querySelector(".author");
newQuote = quote_output.querySelector(".new-quote");
loading = quote_output.querySelector(".loading");
search = document.querySelector(".search");
quote_output.style.display = "none";

function hideOutput() {
  quote_output.style.display = "none";
  search.style.display = "block";
  quote.textContent = "";
  author.textContent = "";
  loading.innerHTML = "";
}

function showOutput() {
  search.style.display = "none";
  quote_output.style.display = "block";
  loading.innerHTML = "";
}

function showLoading() {
  quote_output.style.display = "block";
  loading.innerHTML = "<p>Loading...</p>";
  search.style.display = "none";
}

async function getQuotes() {
  const response = await fetch(API_URL);
  try {
    const data = await response.json();
    quote.textContent = data.quote;
    author.textContent = data.author;
    showOutput();
  } catch (error) {
    hideOutput();
    alert("Failed to fetch quotes. Please try again later.");
  }
}

search.addEventListener("submit", (e) => {
  e.preventDefault();
  getQuotes();
});

newQuote.addEventListener("click", () => {
  getQuotes();
});
