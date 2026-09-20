const API_URL = "https://bookquote-api.vercel.app/get-quotes";

const search = document.querySelector(".search");
const input = search.querySelector("input");
const newQuoteButton = document.querySelector(".new-quote");
const quoteOutput = document.querySelector(".quote-output");
const loading = quoteOutput.querySelector(".loading");
const errorOutput = quoteOutput.querySelector(".error");
const quoteResult = quoteOutput.querySelector(".quote-result");

quoteOutput.style.display = "none";

function showOutput() {
  newQuoteButton.style.display = "flex";
  quoteOutput.style.display = "flex";
  search.style.display = "none";
  loading.innerHTML = "";
}
function hideOutput() {
  quoteResult.innerHTML = "";
  errorOutput.innerHTML = "";
  search.style.display = "flex";
  loading.innerHTML = "";
  quoteOutput.style.display = "none";
}
function showLoading() {
  quoteOutput.style.display = "flex";
  newQuoteButton.style.display = "none";
  search.style.display = "none";
  loading.innerHTML = "<p>Loading...</p>";
}

async function getQuote() {
  const query = input.value.trim();

  if (!query) {
    quoteOutput.style.display = "flex";
    errorOutput.textContent = "Please enter a search query.";
    return;
  }

  showLoading();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        count: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();

    console.log("API response:", data);

    const quote = data[0].quotes[0].quote;
    const author = data[0].quotes[0].author;
    quoteResult.innerHTML = `
                <p class="quote">"${quote}"</p>
                <p class="author">— ${author || "Unknown"}</p>
        `;
  } catch (error) {
    console.error(error);

    errorOutput.textContent = `Failed to fetch quotes: ${error.message}`;
  }
  showOutput();
}

search.addEventListener("submit", (e) => {
  e.preventDefault();
  getQuote();
});

newQuoteButton.addEventListener("click", () => {
  hideOutput();
});
