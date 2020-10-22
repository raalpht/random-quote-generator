const textQuote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnTwitter = document.querySelector(".btn-twitter");
const btnNewQuote = document.querySelector(".btn-new-quote");

let apiQuotes = [];


const newQuote = () => {
    const randomQuote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];

    if(!randomQuote.author) {
        author.textContent = "Anonymous";
    } else {
        author.textContent = randomQuote.author;
    }

    return textQuote.textContent = randomQuote.text;
}


async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){

    }
}


const tweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${textQuote.innerText} - ${author.innerText}`;
    window.open(twitterUrl, '_blank');
}


btnTwitter.addEventListener("click", tweet);
btnNewQuote.addEventListener("click", newQuote);

getQuotes();