function changeIframe(videoSrc) {
    var iframe = document.getElementById("myIframe");
    iframe.src = videoSrc;
}

function togglePopup() {
    var popup = document.getElementById('popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navbarTitle = document.querySelector('.navbar-title');
    var emojiContainer = document.createElement('div');
    emojiContainer.classList.add('emoji-container');

    function getRandomEmoji() {
        var emojis = ['🐞', '🧏', '🤫', '📺', '🌟', '🎥', '📡', '📱', '🎵', '🔥', '🍪', '❗', '🪙', '💀'];
        var randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    }

    function addEmojiAnimation() {
        var emoji = document.createElement('span');
        emoji.textContent = getRandomEmoji();
        emoji.classList.add('emoji-animation');
        emoji.style.left = Math.random() * 100 + 'vw';
        emojiContainer.appendChild(emoji);
        setTimeout(function() {
            emoji.remove();
        }, 5000);
    }

    function showEmojiAnimation() {
        emojiContainer.style.display = 'flex';
        addEmojiAnimation();
        var intervalId = setInterval(addEmojiAnimation, 300);

        function stopEmojiAnimation() {
            emojiContainer.style.display = 'none';
            clearInterval(intervalId);
            emojiContainer.innerHTML = '';
            navbarTitle.addEventListener('click', showEmojiAnimation);
        }

        navbarTitle.removeEventListener('click', showEmojiAnimation);
        navbarTitle.addEventListener('click', stopEmojiAnimation);
    }

    navbarTitle.addEventListener('click', showEmojiAnimation);
    document.body.appendChild(emojiContainer);
});

// Script untuk jam real-time
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    document.getElementById('clock').textContent = timeString;
}

// Panggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);
