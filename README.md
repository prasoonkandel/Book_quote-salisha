
# Book Quote Finder (Frontend)

This is the frontend for [Book Quote Finder](https://github.com/prasoonkandel/Book_quote).

It's designed for writers, researchers, and anyone looking for a special quote they only remember partially. You can search with a few words, a mood, or an idea. The backend uses semantic search to find related book quotes.

**[Open the website](https://book-quote-finder.vercel.app)**

## Try it

1. Open the website.
2. Type what you remember about a quote, or describe the kind of quote you want.
3. Click **Search Quotes** to see a matching quote and its author.
4. Click **New Quote** to search again.

## Features

- Search for quotes without remembering the exact wording.
- Find quotes related to a mood, topic, or idea.
- See the quote and its attributed author.
- Search again without refreshing the page.
- Loading and error messages while fetching quotes.

## Tech Stack

HTML, CSS, and vanilla JavaScript. The website is deployed on Vercel.

## Run locally

No npm install or build step is needed.

```bash
git clone https://github.com/salishaaaa/Book_quote.git
cd Book_quote
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

The frontend currently sends requests to the deployed backend at `https://bookquote-api.vercel.app/get-quotes`. To use your own backend, change `API_URL` in `script.js`.

## How it works

The search form sends a `POST` request with the search text and `count: 1`. The backend finds a related quote and sends back its text and author. JavaScript then shows the result on the page.

The frontend doesn't handle embeddings, databases, or quote retrieval. Those are part of the backend.

![Book Quote Finder architecture](https://raw.githubusercontent.com/prasoonkandel/Book_quote/main/architecture.jpg)

## Related Repository

[Book Quote Finder Backend](https://github.com/prasoonkandel/Book_quote) — FastAPI, database, embeddings, and semantic search.

## Credits

Frontend by [salishaaaa](https://github.com/salishaaaa). Backend by [prasoonkandel](https://github.com/prasoonkandel).
