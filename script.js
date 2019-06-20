const gambarJumbo = document.querySelector('.jumbo');
const container = document.querySelector('.container');
const thumbs = document.querySelectorAll('.thum');

container.addEventListener('click', function (e) {
    if (e.target.className == 'thum') {
        const eSrc = e.target.getAttribute('src');
        gambarJumbo.setAttribute('src', eSrc);
        gambarJumbo.classList.add('fade');
        setTimeout(function () {
            gambarJumbo.classList.remove('fade');

        }, 100);

        thumbs.forEach(function (thum) {
            thum.className = 'thum';
        });

        e.target.classList.add('active');

    }
});