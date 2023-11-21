var quotes = [];
var colors=["#C62828","#AD1457","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#004D40","#1B5E20","#F9A825","#E65100","#263238"];

function getQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=>{
        quotes = data;
    
        Change();
    })
}


function Change(){
    var count = quotes.length;
    var randomNum = Math.floor(Math.random()*count);

    document.getElementById("text").innerText = quotes[randomNum].text;
    document.getElementById("author").innerText = "-" + quotes[randomNum].author;

    var randomColorNum = Math.floor(Math.random()*12);
    document.body.style.backgroundColor = colors[randomColorNum];
}

function ShareTweet(){
    var text=document.getElementById('text').innerText;

    window.location.href='https://twitter.com/intent/tweet?hashtags=haticecodes&text='
    +encodeURIComponent('"'+text+'"');
}
getQuotes();