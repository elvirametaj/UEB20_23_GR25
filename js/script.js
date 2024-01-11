let videoBtn = document.querySelectorAll('.nav-btn');

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.slider-navigation .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/* JS For Comment Section */
function submitComment() {
  alert("Your comment has been submitted!");
}

/*-- JS For Rating ---*/

  const ratingInputs = document.querySelectorAll('.ratingStars input');

  ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
      const ratingStars = input.value;
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



$("btn btn-primary").click(function()
{
console.log("You clicked send")
})