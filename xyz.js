const container = document.querySelector('.flex-container');
const fullText = container.textContent.trim();

// split into paragraphs by newline
const paragraphs = fullText.split('\n').filter(p => p.trim() !== '');

// clear the container first
container.textContent = '';

// create each paragraph as a hidden element
paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    p.style.opacity = '0';
    p.style.transition = 'opacity 1.5s ease';
    p.style.margin = '0 0 12px 0';
    container.appendChild(p);
});

// reveal them one by one
const allP = container.querySelectorAll('p');
let i = 0;

const reveal = setInterval(() => {
    if (i < allP.length) {
        allP[i].style.opacity = '1';
        i++;
    } else {
        clearInterval(reveal);
    }
}, 800);
const heartBox = document.body;

for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (3 + Math.random() * 5) + 's';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px'; // random sizes

    document.body.appendChild(heart);
}
// SCROLL — one block only
setTimeout(() => {
    const strip = document.querySelector('.audio');

    setInterval(() => {
        strip.scrollLeft += 1;

        if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth) {
            strip.scrollLeft = 0;  // loop back to start
        }
    }, 100);  // higher = slower
}, 500);

// STOP OTHER SONGS ON PLAY
const allAudios = document.querySelectorAll('audio');
allAudios.forEach(audio => {
    audio.addEventListener('play', () => {
        allAudios.forEach(other => {
            if (other !== audio) {
                other.pause();
                other.currentTime = 0;
            }
        });
    });
});
const img = new Image();
img.src = 'xyz.png';  // browser downloads it silently in background