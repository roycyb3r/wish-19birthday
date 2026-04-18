function no() {
    alert("meowchudiye, nhi dekhna na? bhakk machhrr. I HATE YOUUU");
    window.location.href = "adi.html";
}

function burst(event) {
    const colors = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#f93dec','#11ebc6'];
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '8px';
        dot.style.height = '8px';
        dot.style.borderRadius = '50%';
        dot.style.background = colors[Math.floor(Math.random() * colors.length)];
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '999';
        dot.style.left = event.clientX + 'px';
        dot.style.top = event.clientY + 'px';
        document.body.appendChild(dot);
        const angle = Math.random() * 360;
        const distance = 50 + Math.random() * 150;
        const rad = angle * Math.PI / 180;
        const moveX = Math.cos(rad) * distance;
        const moveY = Math.sin(rad) * distance;
        dot.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease';
        setTimeout(() => {
            dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
            dot.style.opacity = '0';
        }, 10);
        setTimeout(() => dot.remove(), 900);
    }
}

function yes(event) {
    burst(event);
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
}

// typing effect
const target = document.querySelector('.typing-text');
const message = "😍 Wanna see a surprise suaar? 😍";
let index = 0;
const timer = setInterval(() => {
    target.textContent += message[index];
    index++;
    if (index === message.length) clearInterval(timer);
}, 100);

// emoji burst on click
const emojis = ['🎂', '🎈', '💕', '✨', '🎉', '💖', '🌸', '🥳'];
document.addEventListener('click', function(event) {
    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.fontSize = (16 + Math.random() * 24) + 'px';
        emoji.style.left = event.clientX + 'px';
        emoji.style.top = event.clientY + 'px';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '9999';
        emoji.style.transition = 'transform 1s ease-out, opacity 1s ease';
        document.body.appendChild(emoji);
        const angle = Math.random() * 360;
        const distance = 60 + Math.random() * 100;
        const rad = angle * Math.PI / 180;
        const moveX = Math.cos(rad) * distance;
        const moveY = Math.sin(rad) * distance;
        setTimeout(() => {
            emoji.style.transform = `translate(${moveX}px, ${moveY}px)`;
            emoji.style.opacity = '0';
        }, 10);
        setTimeout(() => emoji.remove(), 1100);
    }
});

// cursor trail — ONE block, everything inside
const trailEmojis = ['♡', '🎀', '🌸', '🪐', '🦋'];
let lastTime = 0;
document.addEventListener('mousemove', function(event) {
    const now = Date.now();
    if (now - lastTime < 80) return;
    lastTime = now;

    const trail = document.createElement('div');
    trail.textContent = trailEmojis[Math.floor(Math.random() * trailEmojis.length)];
    trail.style.position = 'fixed';
    trail.style.left = event.clientX + 'px';
    trail.style.top = event.clientY + 'px';
    trail.style.fontSize = (10 + Math.random() * 16) + 'px';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    trail.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'translate(-50%, -60%) scale(0.5)';
    }, 50);
    setTimeout(() => trail.remove(), 650);
});
// AUTO SCROLL
setTimeout(() => {
    const strip = document.querySelector('.audio');
    setInterval(() => {
        strip.scrollLeft += 1;
        if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth) {
            strip.scrollLeft = 0;
        }
    }, 100);
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