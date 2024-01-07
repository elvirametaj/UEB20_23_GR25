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

 var navLinks = document.getElementById("navBar");
 function showMenu(){
   navLinks.style.right = "0";
 }
 function hideMenu(){
   navLinks.style.right = "-200px";
 }


/*-- JS For Rating ---*/

  const ratingInputs = document.querySelectorAll('.rating input');

  ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
      const rating = input.value;
      alert(`You rated ${ratingStars} stars!`);
    });
  });


/* description: send email to concat*/
/* @param concat form : object*/
/* return: boolean -*/

function sendMail(contactForm) {
  emailjs.send("default_service", "travel", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "packet_information": contactForm.packetinformation.value
  })
  .then(
      function(response) {
          console.log("SUCCESS", response);
      },
      function(error) {
          console.log("FAILED", error);
      }
  );
  return false;  
}


