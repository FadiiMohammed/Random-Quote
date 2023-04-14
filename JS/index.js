var allQuotes = [
  {
    quote: `“So many books, so little time.”`,
    author: `― Frank Zappa`,
  },
  {
    quote: `
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: `― Albert Einstein`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: `― Robert Frost`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: `― Mark Twain`,
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    author: `― Elbert Hubbard`,
  },
];

function generateQuote() {
  getRandomItem(allQuotes);
}

function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var item = arr[randomIndex];
  document.getElementById("quoteOutput").innerHTML = item.quote;
  document.getElementById("authorOutput").innerHTML = item.author;
}
