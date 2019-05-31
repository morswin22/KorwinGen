const paragraph = document.querySelector('blockquote p');

function generate() {
    let quote = '';
    for (let section of data) {
        quote += section[Math.floor(Math.random()*section.length)];
    } 
    paragraph.innerHTML = quote;
}

window.addEventListener('keyup', function(e){
    if (e.keyCode == 82) {
        generate();
    }
});

// dblclick doesn't work on mobile try something like https://stackoverflow.com/a/27561006
document.querySelector('img').addEventListener('dblclick', function(e){
    generate();
    e.preventDefault();
});

generate();