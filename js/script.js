let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/*--- JavaScript for Toggle Menu --*/
<script>
 var navLinks=document.getElementById("navLinks");
 function showMenu(){
   navLinks.style.right = "0";
 }
 function hideMenu(){
   navLinks.style.right = "-200px";
 }
</script>
