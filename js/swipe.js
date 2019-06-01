let startPosX = undefined;
let startPosY = undefined;
const reloadIcon = document.querySelector('span');
let reloading = false;

window.addEventListener('touchstart', function(e) {
    startPosX = e.touches[0].clientX;
    startPosY = e.touches[0].clientY;
});

window.addEventListener('touchmove', function(e) {
    let dx = e.touches[0].clientX - startPosX;
    let dy = e.touches[0].clientY - startPosY;

    let adx = Math.abs(dx);
    let ady = Math.abs(dy);

    if (adx > ady) {
        if (adx > 10) {
            if (dx < 0) {
                if (!reloading) {
                    reloading = true;
                    reloadIcon.classList.add('visible');
                    setTimeout(function () {
                        generate();
                        reloadIcon.classList.remove('visible');
                        setTimeout(function () {
                            reloading = false;
                        }, 250);
                    }, 300);
                }
            }
        }
    }
});