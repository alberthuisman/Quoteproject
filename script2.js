// burger

const menuBtn = document.querySelector('.menu-button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

// Animation to the About-cards
function flyIn() {
  setTimeout(function() {
    document.querySelector(".first").classList.remove("hidden");
  }, 700);
    setTimeout(function() {
    document.querySelector(".second").classList.remove("hidden");
  }, 200);
    setTimeout(function() {
    document.querySelector(".third").classList.remove("hidden");
  }, 1200);
}

//Contact-form

const nameInput = document.querySelector("#nameInput");
const email = document.querySelector("#emailInput");
const message = document.querySelector("#message");
const thanks = document.querySelector("#thanks");
const alerts = document.querySelectorAll(".alert");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  const inputfields = document.querySelectorAll("input");
  for (let i = 0; i < inputfields.length; i++) {
    inputfields[i].value = "";
  }
  message.value = "";
  clearMessages();
  document.getElementById("myForm").style.display = "none";
}

// Checking the input-fields when the submit-button is pressed
function validateForm() {
   
  clearMessages();
  let alertFlag = false;

  if(nameInput.value.length < 1){
    alerts[0].innerText = "Please fill in a name";
    nameInput.classList.add("alert-border");
    alertFlag = true;
  }
  
  if(!emailIsValid(email.value)) {
    alerts[1].innerText = "invalid email address";
    email.classList.add("alert-border");
    alertFlag = true;
  }

  if(message.value.length < 1){
    alerts[2].innerText = "Please fill in a message";
    message.classList.add("alert-border");
    alertFlag = true;
  }

  if(!alertFlag) {
    thanks.innerText = "Thanks for your message!";
  }
}

//Clear error messages
function clearMessages(){
  for(let i =0; i < alerts.length; i++) {
    alerts[i].innerText = "";
  }
  thanks.innerText = "";
  nameInput.classList.remove("alert-border");
  email.classList.remove("alert-border");
  message.classList.remove("alert-border");
}

//Check whether the entered email address has a valid format
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
