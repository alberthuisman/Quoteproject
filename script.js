const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener('click', () => {
    quoteText.classList.remove("run-animation");
    void quoteText.offsetWidth;
    quoteText.classList.add("run-animation");
});

const spring = [
               "https://images.unsplash.com/photo-1586952205040-22514ffab1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=612&q=80",
               "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
               "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80",
               "https://images.unsplash.com/photo-1490918686724-6b23c27c03d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
               "https://images.unsplash.com/photo-1609669456419-a00d51aa0eec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
               "https://images.unsplash.com/photo-1489537235181-fc05daed5805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwcmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
               "https://images.unsplash.com/photo-1448227700746-d8eab5a1b9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
               "https://images.unsplash.com/photo-1611326236006-51eb558e9554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
               "https://images.unsplash.com/photo-1523476602796-646439cea0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNwcmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
               ];

const winter = ["https://images.unsplash.com/photo-1476522183715-d1a7af59419f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
                "https://images.unsplash.com/photo-1518983835933-984f33c641e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1608581796221-415be903abdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1484313544071-4d67c88b99be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
                "https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                "https://images.unsplash.com/photo-1476547002920-44591fb77f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1484732710474-fe08580a0fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1608063003097-61f4ec0d1c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                "https://images.unsplash.com/photo-1449333548446-ea8ffacbdf1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1514747348279-46eb4082b804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                "https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
               ];

const summer = [
                'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1491929007750-dce8ba76e610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80',
                'https://images.unsplash.com/photo-1571043281665-9debfed10719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                'https://images.unsplash.com/photo-1498998754966-9f72acbc85b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1544945582-052b29cd29e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80',
                'https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2041&q=80',
                'https://images.unsplash.com/photo-1554973653-c9071bd14011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80'
];

const autumn = [
                'https://images.unsplash.com/photo-1516181676778-ff27bcaf5fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/flagged/photo-1552863047-1dd55fb6f8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1506202687253-52e1b29d3527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1454129170132-347ea87dc9dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1815&q=80',
                'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1444430287421-043c7c8ad450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1515094854286-bc6b38a1326f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                'https://images.unsplash.com/photo-1453959022778-cfda85dbe0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1535608577102-bb54e62fe045?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
                'https://images.unsplash.com/photo-1509671658102-fbe78e4f7b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
];

// Variables 

let season = "summer";
let footer = document.getElementById("footer");
let header = document.getElementById("header");
let body = document.getElementsByTagName('body')[0];
let button = document.getElementsByClassName("quote-button"); //all the buttons
let quoteContainer = document.getElementById("outer-quote-container"); // semi-transparent container for quotes
let projectLogo = document.getElementById('tcpLogo');
let projectLinks = document.getElementsByClassName('nav-buttons');
let projectAnchorTags = document.querySelectorAll('a');
let timeAndDate = document.getElementById("container-of-time"); // semi-transparent container for time
let timeContainer = document.getElementById("time-container");
let dateContainer = document.getElementById("date-container");
let links = document.querySelectorAll("li");
let documentContainer = document.getElementById("container");




const springBtn = document.getElementById('spring-button');
const summerBtn = document.getElementById('summer-button');
const autumnBtn = document.getElementById('autumn-button');
const winterBtn = document.getElementById('winter-button');

// Colors and Styles for the different seasons 

const springLetters = "Patrick Hand, cursive";
const springQuoteLetters = "Bad Script, cursive";
const springDarkGreen = "#1B5E20";
const springLightGreen = "#F1F8E9";
const springButtonGreen = "#99CC60";

const summerLetters = "Poiret One, cursive"; // for the rest of the text
const summerQuoteLetters = "Original Surfer, cursive"; // for the quote
const summerLightGold = "#FFC107"; // for the header and footer
const summerDarkGold = "#3E2723"; // for the quote
const summerButtonGold = "#c67c00"; // for the buttons

const autumnLetters = springQuoteLetters; // for the rest of the text
const autumnQuoteLetters = 'Niconne, cursive'; // for the quote
const autumnAuthorLetters = 'Cormorant Garamond, serif'; // for the author
const autumnLightBrown = "#BB4D00"; // for the header and footer
const autumnDarkBrown = "#3E2723"; // for the quote
const autumnButtonBrown = "#F57C00"; // for the buttons

const winterLetters = 'Antic, sans-serif'; // for the rest of the text
const winterQuoteLetters = 'Amatic SC, cursive'; // for the quote
const winterLightBlue = "#E6FFFF"; // for the header and footer
const winterDarkBlue = "#3E2723"; // for the quote
const winterButtonBlue = "#82B3C9"; // for the buttons

// This should be used to refactor the functions and use less code

let primaryColors = [footer, header];
let primaryLetters = [projectLogo, projectLogo];
let secondaryLetters = [timeContainer, dateContainer];
let containerColors = [quoteContainer, timeAndDate];


// Season changing behaviour  

springBtn.addEventListener('click', () => {
  if (season !== "spring") {
  season = "spring";
    document.body.style.backgroundImage = "url(" + spring[0] + ")";
    documentContainer.style.backgroundImage = document.body.style.backgroundImage;

    // styles header & footer, the logo, the containers bg ,the time container font
    for (let i = 0; i < primaryColors.length; i++) {
      primaryColors[i].style.backgroundColor = springLightGreen;
      primaryLetters[i].style.fontFamily = springLetters;
      secondaryLetters[i].style.fontFamily = springQuoteLetters;
      containerColors[i].style.backgroundColor = "rgba(241, 248, 233, 0.8)";
    }
    
    quoteText.style.borderLeft = "solid #1B5E20 3px";
    projectLogo.style.color = springDarkGreen;
    authorSection.style.fontFamily = springLetters;
    authorSection.style.color = springDarkGreen;
    quoteText.style.fontFamily = springQuoteLetters;
    quoteText.style.fontSize = '18px';
    body.style.backgroundColor = springLightGreen;
    documentContainer.style.outline = `solid 3px ${springLightGreen}`;

    // Styles the buttons, the links and the <a> tags
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = springButtonGreen;
      button[i].style.fontFamily = springLetters;
    };
    for (let i = 0; i < projectLinks.length; i++) {
      projectLinks[i].style.fontFamily = springLetters
    };
    for (let i = 0; i < projectAnchorTags.length; i++) {
      projectAnchorTags[i].style.color = springDarkGreen;
    };

    for (let i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "rgba(241, 248, 233, 0.8)";
    };
    
  };
  document.getElementById("seasonDropdown").classList.toggle("show");
  document.getElementById("container-of-time").classList.toggle("hide");
});

summerBtn.addEventListener('click', () => {
  if (season !== "summer") {
    season = "summer";
    document.body.style.backgroundImage = "url(" + summer[0] + ")";
    documentContainer.style.backgroundImage = document.body.style.backgroundImage;
    
    // styles header & footer, the logo, the containers bg ,the time container font
    for (let i = 0; i < primaryColors.length; i++) {
      primaryColors[i].style.backgroundColor = summerLightGold;
      primaryLetters[i].style.fontFamily = summerLetters;
      secondaryLetters[i].style.fontFamily = summerLetters;
      containerColors[i].style.backgroundColor = "rgba(255, 253, 231, 0.7)";
    }
    
    quoteText.style.borderLeft = "solid #FFC107 3px";
    projectLogo.style.color = 'black';
    authorSection.style.fontFamily = summerLetters;
    authorSection.style.color = summerDarkGold;
    quoteText.style.fontSize = '18px';
    quoteText.style.fontFamily = summerQuoteLetters;
    body.style.backgroundColor = summerLightGold;
    documentContainer.style.outline = `solid 3px ${summerLightGold}`;
    
    // Styles the buttons, the links and the <a> tags
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = summerButtonGold
      button[i].style.fontFamily = summerLetters;
    };
    for (let i = 0; i < projectLinks.length; i++) {
      projectLinks[i].style.fontFamily = summerLetters
    };
    for (let i = 0; i < projectAnchorTags.length; i++) {
      projectAnchorTags[i].style.color = 'black';
    };
    for (let i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "rgba(255, 253, 231, 0.7)";
    };
  
  };
  document.getElementById("seasonDropdown").classList.toggle("show");
  document.getElementById("container-of-time").classList.toggle("hide");
});

autumnBtn.addEventListener('click', () => {
  if (season !== "autumn") {
  season = "autumn";
    document.body.style.backgroundImage = "url(" + autumn[0] + ")";
    documentContainer.style.backgroundImage = document.body.style.backgroundImage;
    
    // styles header & footer, the logo, the containers bg ,the time container font
    for (let i = 0; i < primaryColors.length; i++) {
      primaryColors[i].style.backgroundColor = autumnLightBrown;
      primaryLetters[i].style.fontFamily = autumnLetters;
      secondaryLetters[i].style.fontFamily = autumnLetters;
      secondaryLetters[i].style.color = autumnDarkBrown;
      containerColors[i].style.backgroundColor = "rgba(251, 233, 231, 0.7)";
    }

    quoteText.style.borderLeft = "solid #BB4D00 3px"
    projectLogo.style.color = 'black';
    authorSection.style.fontFamily = autumnAuthorLetters;
    authorSection.style.color = autumnDarkBrown;
    authorSection.style.fontSize = '18px';
    quoteText.style.fontFamily = autumnQuoteLetters;
    quoteText.style.color = autumnDarkBrown;
    quoteText.style.fontSize = '22px';
    timeContainer.style.fontSize = '22px';
    dateContainer.style.fontSize = '18px';
    body.style.backgroundColor = autumnLightBrown;
    documentContainer.style.outline = `solid 3px ${autumnLightBrown}`;

    // Styles the buttons, the links and the <a> tags
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = autumnButtonBrown
      button[i].style.fontFamily = autumnLetters;
    };
    for (let i = 0; i < projectLinks.length; i++) {
      projectLinks[i].style.fontFamily = autumnLetters
    };
    for (let i = 0; i < projectAnchorTags.length; i++) {
      projectAnchorTags[i].style.color = 'black';
    };
    for (let i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "rgba(251, 233, 231, 0.7)";
    };
  };
  document.getElementById("seasonDropdown").classList.toggle("show");
  document.getElementById("container-of-time").classList.toggle("hide");
});

winterBtn.addEventListener('click', () => {
  if (season !== "winter") {
    season = "winter";
    document.body.style.backgroundImage = "url(" + winter[0] + ")";
    documentContainer.style.backgroundImage = document.body.style.backgroundImage;
    
    // styles header & footer, the logo, the containers bg ,the time container font
    for (let i = 0; i < primaryColors.length; i++) {
      primaryColors[i].style.backgroundColor = winterLightBlue;
      primaryLetters[i].style.fontFamily = winterLetters;
      secondaryLetters[i].style.fontFamily = winterLetters;
      containerColors[i].style.backgroundColor = "rgba(225, 245, 254, 0.7)";
    }
    
    quoteText.style.borderLeft = "solid #E6FFFF 3px"
    projectLogo.style.color = 'black';
    authorSection.style.fontFamily = winterLetters;
    authorSection.style.color = 'black';
    quoteText.style.fontFamily = winterQuoteLetters;
    quoteText.style.fontSize = '24px';
    quoteText.style.color = 'black';
    body.style.backgroundColor = winterLightBlue;
    documentContainer.style.outline = `solid 3px ${winterLightBlue}`;

    // Styles the buttons, the links and the <a> tags
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = winterButtonBlue
      button[i].style.fontFamily = winterLetters;
    };
    for (let i = 0; i < projectLinks.length; i++) {
      projectLinks[i].style.fontFamily = winterLetters
    };
    for (let i = 0; i < projectAnchorTags.length; i++) {
      projectAnchorTags[i].style.color = 'black';
    };
    for (let i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "rgba(225, 245, 254, 0.7)";
    };
  };
  document.getElementById("seasonDropdown").classList.toggle("show");
  document.getElementById("container-of-time").classList.toggle("hide");
});

// burger logic open and close

const menuBtn = document.querySelector('.menu-button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

//Getting a new quote and author

let quoteSection = document.getElementById("quote");
let authorSection = document.getElementById("author");
let windowWidth = window.innerWidth;

let bringQuoteBtn = document.getElementById("quote-btn");

bringQuoteBtn.addEventListener("click", () => {
    let page = Math.floor(Math.random() * 7268);
    let randomNumber = Math.ceil(Math.random()*10);
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        let quote = data.data[randomNumber].quoteText;
        let author = data.data[randomNumber].quoteAuthor;
        quoteSection.innerHTML = quote;
        authorSection.innerHTML = author;
        if (quote.length > 250) {
          quoteText.style.fontSize = '14px';
          if (season === 'winter' || season === 'autumn') {
          quoteText.style.fontSize = '20px';
          console.log(quote.length);
          console.log(quoteText.getAttribute('style'));
          }
          else if (season === 'spring')
            quoteText.style.fontSize = '16px';
            console.log(quote.length);
            console.log(quoteText.getAttribute('style'));
        }
        else if (quote.length > 150 && quote.length < 250) {
          quoteText.style.fontSize = '16px';
          if (season === 'winter' || season === 'autumn')
            quoteText.style.fontSize = '22px';
        }
        else {
          quoteText.classList.remove("small-text");
          quoteText.style.fontSize = '18px';
          if (season === 'winter' || season === 'autumn')
            quoteText.style.fontSize = '24px';
        }
      })
      .catch(err=>console.log(err));
  });

const seasonBtn = document.getElementById('season-btn');

bringQuoteBtn.addEventListener('click', () => {
  let backgroundIndex = Math.ceil(Math.random()*10);
      if (season === 'summer') {  
        if (backgroundIndex < summer.length) {
        document.body.style.backgroundImage = "url(" + summer[backgroundIndex] + ")";
        console.log(backgroundIndex)} //console.logs toegevoegd voor inspectie afbeeldingen
    } else if (season === 'autumn'){
        if (backgroundIndex < autumn.length) {
          document.body.style.backgroundImage = "url(" + autumn[backgroundIndex] + ")";
          console.log(backgroundIndex)} //console.logs toegevoegd voor inspectie afbeeldingen
    } else if (season === 'winter'){
        if (backgroundIndex < winter.length) {
          document.body.style.backgroundImage = "url(" + winter[backgroundIndex] + ")";
          console.log(backgroundIndex)} //console.logs toegevoegd voor inspectie afbeeldingen
    } else {
        if (backgroundIndex < spring.length) {
          document.body.style.backgroundImage = "url(" + spring[backgroundIndex] + ")";
          console.log(backgroundIndex)} //console.logs toegevoegd voor inspectie afbeeldingen
  }
  document.getElementById("container").style.backgroundImage = document.body.style.backgroundImage;
});

seasonBtn.addEventListener('click', () => {    
  document.getElementById("seasonDropdown").classList.toggle("show");
  document.getElementById("container-of-time").classList.toggle("hide");
});
  
//Contact-form

const nameInput = document.querySelector("#nameInput");
const email = document.querySelector("#emailInput");
const message = document.querySelector("#message");
const thanks = document.querySelector("#thanks");
const alerts = document.querySelectorAll(".alert");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  const inputfields = document.querySelectorAll("input");
  for (let i = 0; i < inputfields.length; i++) {
    inputfields[i].value = "";
  }
  message.value = "";
  clearMessages();
  document.getElementById("myForm").style.display = "none";
}

// Checking the input-fields when the submit-button is pressed
function validateForm() {
   
  clearMessages();
  let alertFlag = false;

  if(nameInput.value.length < 1){
    alerts[0].innerText = "Please fill in a name";
    nameInput.classList.add("alert-border");
    alertFlag = true;
  }
  
  if(!emailIsValid(email.value)) {
    alerts[1].innerText = "invalid email address";
    email.classList.add("alert-border");
    alertFlag = true;
  }

  if(message.value.length < 1){
    alerts[2].innerText = "Please fill in a message";
    message.classList.add("alert-border");
    alertFlag = true;
  }

  if(!alertFlag) {
    thanks.innerText = "Thanks for your message!";
  }
}

//Clear error messages

function clearMessages(){
  for(let i =0; i < alerts.length; i++) {
    alerts[i].innerText = "";
  }
  thanks.innerText = "";
  nameInput.classList.remove("alert-border");
  email.classList.remove("alert-border");
  message.classList.remove("alert-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// clock logic

function displayDate(){
    var d = new Date();
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let hr = d.getHours()
    let min = d.getMinutes()
    if (min < 10) {
      min = "0" + min;
    }
    timeContainer.innerHTML = hr + " : " + min;
    dateContainer.innerHTML = days[d.getDay()]+" | "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();
    setTimeout(displayDate, 1000);
}

displayDate();

// Like button logic

let likeBtn = document.getElementById("like-btn");
let likedOverlay = document.getElementById("liked-overlay");
let likedContainer = document.getElementById("super-quote");
let likedCloseButton = document.getElementById("close-btn");

let thankYouTitle = document.getElementById('thank-you-title');
let thankYouMessage = document.getElementById('thank-you-message');
let authorSearchLink = document.getElementById('author-link')

likeBtn.addEventListener('click', () => {
  let heart = document.getElementById("heart");
  let alreadyClicked = false;
  if (alreadyClicked === false) {
    heart.classList.add("fa-beat");
    alreadyClicked = true;
    setTimeout( () => {
      if (alreadyClicked === true) {
      heart.classList.remove("fa-beat");
    }}, 800);
  
  setTimeout(() => {
    likedOverlay.style.display = "flex";
    likedContainer.style.display = "flex";
  }, 700);

  thankYouTitle.innerHTML = `Thank you for liking this quote from ${authorSection.innerHTML}!`
  thankYouMessage.innerHTML = `If you want to know more about ${authorSection.innerHTML}, just follow this link:`
  authorSearchLink.href = `https://www.google.com/search?q=${authorSection.innerHTML}`
}});

likedCloseButton.addEventListener('click', () => {
  likedOverlay.style.display = "none";
  likedContainer.style.display = "none";

})


