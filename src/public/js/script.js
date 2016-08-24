// event listener to respond to "Show another quote" button clicks
document.getElementById('tag-all').addEventListener("click", function() {
  PrintObject('all');  // 'The argument will be set to variable tag'
}); 
document.getElementById('tag-phil').addEventListener("click", function() {
  PrintObject('phi');
}); 
document.getElementById('tag-humor').addEventListener("click", function() {
  PrintObject('humor');
});
document.getElementById('tag-spirit').addEventListener("click", function() {
  PrintObject('spirit');
});
document.getElementById('tag-lyrics').addEventListener("click", function() {
  PrintObject('lyrics');
});

var all_cnt= 0;
var phil_cnt= 0;
var humor_cnt = 0;
var spirit_cnt = 0;
var lyrics_cnt = 0;
var loop_cnt = 0;
var index = 0;

var quotes = [
  {
   "quote": "I DON’T have EX’s! I have Y’s. Like ‘Y the hell did I date you?!’",
   "source": "Kevin Hart",
   "tags": "Humor"
  }, 
  {
   "quote": "So many social engagements, so little time.",
   "source": "Raising Arizona",
   "tags": "Humor",
   "year": "1987"
  }, 
  {
   "quote": "A collision is exactly what you need. Only a collision can transform.",
   "source": "Tom Robbins",
   "citation": "Half Asleep in Frog Pajamas",
   "year": "1994",
   "tags": "Philosophy"
  },
  {
  "quote": "Buddha said life is pain, as well it might be said that the rest of his teachings could be summed up as, let pain be our teacher.",
  "source": "Unknown",
  "tags": "Spiritual"
  },
  {
  "quote": "That which we are, we shall teach, not voluntarily, but involuntarily.",
  "source": "Ralph Waldo Emerson",
  "citation": "The Over Soul According to Emerson",
  "year": "1841",
  "tags": "Philosophy"
  },
  {
  "quote": "America is the only country where people go hunting on a full stomach. I love America.",
  "source": "Chris Rock",
  "tags": "Humor"
  },
  {
  "quote": "If it’s all the same to you, honey, I think I’ll skip this little get together, slip out with the boys and knock back a couple of Coca Colas.",
  "source": "Raising Arizona",
  "tags": "Humor",
  "year": "1987"
  }, 
  {
  "quote": "Did you exchange a walk on part in the war, for a lead role in a cage?",
  "source": "Pink Floyd",
  "citation": "Wish You Were Here",
  "year": "1975",
  "tags": "Lyrics"
  },
  {
  "quote": "My mistress' eyes are nothing like the sun",
  "source": "Sting",
  "citation": "Mercury Rising",
  "year": "1998",
  "tags": "Lyrics"
  },
  {
  "quote": "Someone told me I was delusional. I almost fell off my unicorn.",
  "source": "Unknown",
  "tags": "Humor"
  },
  {
  "quote": "Ego says, once everything falls into place, I‘ll find peace. Spirit says, find your peace and then everything will fall into place.",
  "source": "Marianne Williamson",
  "tags": "Spiritual"
  },
  {
  "quote": "Your mind will answer most questions if you learn to relax and wait for the answer.",
  "source": "William S. Burroughs",
  "tags": "Philosophy"
  },
  {
  "quote": "They remember too much about what went wrong. It might be they should learn to forget.",
  "source": "Bonnie Raitt, One Part Be My Lover",
  "tags": "Lyrics"
  },
  {
  "quote": "I would only hire someone that I would work for.",
  "source": "Mark Zuckerberg",
  "citation": "Q&A With Mark",
  "year": "2015",
  "tags": "Philosophy"
  },
  {
  "quote": "Money is the Mc-mansion in Sarasota that starts falling apart after 10 years. Power is the old stone building that stands for centuries.",
  "source": "House of Cards, Francis Underwood",
  "year": "2013",
  "tags": "Philosophy"
  },
  {
  "quote": "Rather than love, than money, than fame, give me truth.",
  "source": "Henry David Thoreau",
  "citation": "Walden",
  "year": "1854",
  "tags": "Philosophy"
  },
  {
  "quote": "This is not Nam. This is bowling, there are rules.",
  "source": "The Big Lebowski",
  "year": "1998",
  "tags": "Humor"
  }
];
  
// newArray = oldArray.slice(0);     // This is how we create a new array from an old array
  
var quotesShortArray = quotes.slice(0);
  
  
function PrintObject(tag) {  //'tag is all, phi, humor, etc...'
  randomBackColor();     // change background color
  if (all_cnt >= quotes.length - 1) {  // If we have reached the end of our quotes,
    all_cnt = 0;                       // go back to the beginning quote by resetting total
  }
  if(all_cnt == 0) {
    quotesShortArray = quotes.slice(0);         // First time through our Short Array looks like quotes array
  }
  if (phil_cnt >= quotes.length) {
    phil_cnt = 0;
  }
  if (humor_cnt >= quotes.length - 1) {
    humor_cnt = 0;
  }
  if (spirit_cnt >= quotes.length - 1) {
    spirit_cnt = 0;
  }
  var quoteObject = findObject(tag);  // Go get quote to print
  if (quoteObject.hasOwnProperty('citation')) {
    if (quoteObject.hasOwnProperty('year')) {
      document.getElementById('quotation-box').innerHTML = '<p class="quote">' +    //year and citation
        quoteObject.quote + '</p><p class="source">' + quoteObject.source +
        '<span class="citation">' + quoteObject.citation + '</span><span class="year">' +
        quoteObject.year + '</span></p>';
    } else { //end if
      document.getElementById('quotation-box').innerHTML = '<p class="quote">' +   //citation only
        quoteObject.quote + '</p><p class="source">' + quoteObject.source +
        '<span class="citation">' + quoteObject.citation + '</span></p>';
    } //end else
  
  } else { //end initial if
    if (quoteObject.hasOwnProperty('year')){
      document.getElementById('quotation-box').innerHTML = '<p id="quote" class="quote">' +   //year only
        quoteObject.quote + '</p><p class="source">' + quoteObject.source +
        '<span class="year">' + quoteObject.year + '</span></p>';
    } else { //end if
      document.getElementById('quotation-box').innerHTML = '<p class="quote">' +       //quote and source only
        quoteObject.quote + '</p><p class="source">' + quoteObject.source +
        '</p>';
      }  //end else
  
  } //end initial else
  

} //end function

function findObject(tag) {
  for(i=0; i < quotes.length; i++) {   // Search our quotes array
    loop_cnt ++;
    if (loop_cnt > 500) {   // I put this in to prevent infinite loops
      alert('Please choose another tag');
      loop_cnt = 0;
      break;
    }
    switch (tag) {      // Return quote that matches our tag user clicked
        case 'all':
             var i = all_cnt;
             all_cnt ++;      
             return getNeverSeenRandomQuote();
        case 'phi':
             var i = phil_cnt;
             phil_cnt ++;      //increment cnt before it gets sent to print
             if (quotes[i].tags == 'Philosophy') {
               return quotes[i];
             }
             break;
        case 'humor':
             var i = humor_cnt;
             humor_cnt ++;       
             if (quotes[i].tags == 'Humor') {
               return quotes[i];
             }
             break;
        case 'spirit':
             var i = spirit_cnt;
             spirit_cnt ++;  
             if (quotes[i].tags == 'Spiritual') {
               return quotes[i];
             }
             break;
        case 'lyrics':
             var i = lyrics_cnt;
             lyrics_cnt ++;       //increment phi_cnt before it gets sent to print
             if (quotes[i].tags == 'Lyrics') {
               return quotes[i];
             }
             break;
      }
    if (i == quotes.length - 1) {  // Remember quotes length is one more than the array index
      i = 0;   
      all_cnt = phil_cnt = humor_cnt = spirit_cnt = lyrics_cnt = 0;
    } // if end
   } // for end
  
} // function end
    
function getRandomQuote() {  // Use * 17) for 0 thru 17 ---- Use *17) +1 for 1 thru 17
  return quotes[Math.floor(Math.random() * 17)]; // When user clicks all a random quote is calculated
}
    
function getNeverSeenRandomQuote() {  // This function display a random quote never seen(until all have been seen)
  index = Math.floor(Math.random() * ((quotesShortArray.length) -1)); // Set index to random number for our quotes array length
  var returnObject = quotesShortArray[index];
  quotesShortArray.splice(index,1);  // Shortens our quotesShortArray -- Notice we use slice here and splice later.
  return returnObject;            // Returns a random quote from our quotesShortArray
}
    
function randomBackColor() { // Function changes background color when a tag is clicked
  var color = '#'; 
  var letters = ['ff3333','cc0000','990000','9999ff','4d4dff','0000FF','0000b3','000080','009900','006600','ffbf00','cc9900','997300','3377ff','0044cc','003399']; 
  color += letters[Math.floor(Math.random() * letters.length)];
  document.body.style.background = color; // Setting the random color on your div element.
}

window.setInterval(function () {
  PrintObject('all');
},11000);

function toggleGridClass() {  // Not needed afterall
if (screen.width > 600) {  //  We want to display our tags in a row on large devices
  document.getElementById("tag-all").classList.toggle("grid-7"); // If it has this class it will be removed
  document.getElementById("tag-all").classList.toggle("grid-3"); // If it doesn't have this class it will be added
}
}

// toggleGridClass();   // Don't need to use this but its nice to know if we ever
                        // need to toggle class.