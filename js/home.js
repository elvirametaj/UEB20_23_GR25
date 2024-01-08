let videoBtn = document.querySelectorAll('.nav-btn');

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.slider-navigation .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
