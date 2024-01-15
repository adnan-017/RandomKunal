var quotes = [
    "Go for it now. The future is promised to no one",
    "If you are patient in one moment of anger, you will escape one hundred days of sorrow",
    "Each day provides its own gifts",
    "Truth is powerful and it prevails.",
    "Give thanks for a little and you will find a lot"
    // Add more quotes here
];

function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

document.getElementById("copyQuote").addEventListener("click", function() {
    var quoteToCopy = document.getElementById("quoteDisplay").innerText;
    navigator.clipboard.writeText(quoteToCopy).then(function() {
        console.log('Quote copied to clipboard');
    }).catch(function(error) {
        console.error('Error in copying text: ', error);
    });
});

document.getElementById("tweetQuote").addEventListener("click", function() {
    var quoteToTweet = document.getElementById("quoteDisplay").innerText;
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteToTweet);
    window.open(tweetUrl, '_blank');
});

window.onload = displayRandomQuote;