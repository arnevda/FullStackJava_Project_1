// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// quotes Array, filling it with objects containing the quote and other properties (quote, source, citation, year, tags)
// citation and year properties are optional
var quotes = [
    { quote: 'You can do anything but not everything',
      source: 'David Allen',
      citation: 'Making It All Work',
      year: '2009',
      tags: 'Life'
    },
    { quote: 'Be yourself; everyone else is already taken',
      source: 'Oscar Wilde',
    },
    { quote: 'Love means never having to say you\'re sorry',
      source: 'Barbra Streisand',
      citation: 'Love Story',
      year: '1970',
      tags :'Love'
    },
    { quote: 'A martini. Shaken, not stirred',
      source: 'James Bond',
      citation: 'Goldfinger',
      year: '1964',
      tags: 'Movie quotes'
    },
    { quote: 'There are no two words in the English language more harmful than \'good job\'',
      source: 'Terence Fletcher',
      citation: 'Whiplash',
      year: '2004',
      tags: 'Movie quotes'
    },
    { quote: 'ET phone home',
      source: 'ET',
      citation: 'ET the Extra-Terrestrial',
      year: '1982',
      tags: 'Movie quotes'
    },
    { quote: 'Life is about making an impact, not an income',
      source: 'Kevin Kruse',
      tags:'Life'
    }
];

// defining the variables needed
var cycledQuotes = [];  // will contain quotes already displayed
var cycledQuotesIndex = 0;  // we need a seperate variable for the cycledQuotes index, this will increment every time a quote is displayed
var quoteIndex = 0;

// empties the cycledQuotes array and returns the value of cycledQuotesIndex to 0, this is so we can start a new cycle
function resetCycledQuotes(){
      cycledQuotes = [];
      cycledQuotesIndex = 0;
      console.log('The start of a new cycle');
}

// generates a random number between 0 and the length of the quotes array
function getRandomNumber() {
    var  randomNum = Math.floor(Math.random() * quotes.length);

    return randomNum;
}

// gets a random quote from the quotes array
function getRandomQuote(){
      quoteIndex = getRandomNumber();

      if (cycledQuotes.includes(quotes[quoteIndex].quote)) {
          getRandomQuote(); // if the picked quote is already displayed, 'restart' the function
      } else {
          cycledQuotes.push(quotes[quoteIndex].quote); // if the quote has not yet been displayed, add the value of the quote property of the picked quote to the cycledQuotes array
          console.log(cycledQuotes[cycledQuotesIndex]);
          cycledQuotesIndex ++;
      }

      if (cycledQuotes.length === quotes.length) { // when all quotes have been displayed, the length of both arrays will be the same, reset the cycle
          resetCycledQuotes();
      }

      return quotes[quoteIndex]; // returns a value stored in the quotes array, in this case an object
}

// generates a random RGB code and changes the background color of the body and the button elements to the generated color
function setRanBackground(){

      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

      document.body.style.background = rgb;
      document.getElementById('loadQuote').style.background = rgb;
}

// displays the picked quote, adding the html code needed to the html variable
function printQuote(){
      var quote = getRandomQuote();
      var html = '';

      html = '<p class="quote">' + quote.quote + '</p>';
      html += '<p class="source">' + quote.source;
      if(quote.citation){html += '<span class="citation">' + quote.citation + '</span>'};
      if(quote.year){html += '<span class="year">' + quote.year + '</span>'};
      if(quote.tags){html += '</br><span class="tags">'+ 'Category: ' + quote.tags + '</span>'};
      html += '</p>'
      document.getElementById('quote-box').innerHTML = html; // changes the inner html code of the quote-box element to the html string defined above
      setRanBackground(); // calls the function to change the background color
}


printQuote(); // first time the webpage loads, the event listener onclick is not called yet, this calls the function the first time
setInterval(printQuote, 30000); // calls the printQuote function every 30 seconds
