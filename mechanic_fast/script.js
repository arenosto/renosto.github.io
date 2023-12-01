//Guessing Game
function guessRandonNum() {
  let randonNumber = Math.floor(Math.random() * 5) + 1; //this generate randon number
  let userNumber = prompt("Guess a number from 1 to 5:"); //user input
  //the below generate the discount to be given to user
  let discountCode = ("TENNOW") + Math.floor(Math.random() * 5) + Math.floor(Math.random() * 5) + Math.floor(Math.random() * 5);

    //check if user guess is the correct number
    if(randonNumber == userNumber){
      alert("You win! Your 10% discount code is: " + discountCode)
    }
    else{
      alert("Sorry, better luck next time! Correct number was "+ randonNumber + ", you choose " + userNumber + ".");
    }
}


//Code to show text relating to image when clicking on the image
/*Code snippet from zFunx (https://codepen.io/zFunx/pen/dvJQEY), modified by me*/
var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}
/* End of code snippet from zFunx (https://codepen.io/zFunx/pen/dvJQEY), modified by me*/ 



//Form Validation with references from Web Dev Simplified, access here: https://www.youtube.com/watch?v=In0nB0ABaUk
function formCheck(){
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const opt = document.getElementById('opt')
const query = [1, 2, 3]
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    var messages = []
    if (name.value === '' || name.value == null) {
      messages.push('Name is required')
    }

    if (phone.value.length <= 6 || phone.value == null) {
      messages.push('Phone must be longer than 7 numbers')
    }

    if (email.value === '' || email.value == null) {
      messages.push('Email is required')
    }
  
      if (opt.value != query[i] ) {
        messages.push('Please select query')
    }

    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })

}

//alert on the About page
function aboutP() {
  setTimeout(function(){
    alert("Mechanic Fast is celebrating 10 years! Bring your car for an inspection and celebrate with us!");
  }, 3000);
}
