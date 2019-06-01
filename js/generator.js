const paragraph = document.querySelector('blockquote p');
let lastGenerated = [];

function generate() {
    let quote = '';
    let level = 0;
    for (let section of data) {
        if (lastGenerated[level]) {
            let selection;
            do {
                selection = Math.floor(Math.random()*section.length);
            } while (selection == lastGenerated[level]);
            lastGenerated[level] = selection;
            quote += section[selection];
        } else {
            lastGenerated[level] = Math.floor(Math.random()*section.length);
            quote += section[lastGenerated[level]];
        }
        level++;
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