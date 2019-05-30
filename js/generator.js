const paragraph = document.querySelector('blockquote p');

function generate() {
    let quote = '';
    for (let section of data) {
        quote += section[Math.floor(Math.random()*section.length)];
    } 
    paragraph.innerHTML = quote;
}

generate();