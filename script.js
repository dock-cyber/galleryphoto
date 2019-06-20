const gambarJumbo = document.querySelector('.jumbo');
const thumbnail = document.querySelector('.thumbnail');

thumbnail.addEventListener('click', function (e) {
    if (e.target.className == 'thum') {
        const eSrc = e.target.getAttribute('src');
        gambarJumbo.setAttribute('src', eSrc);
    }
});