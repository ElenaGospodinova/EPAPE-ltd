
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});




var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");

function validateName () {

    var name = document.getElementById("contact-name").value;

    if(name.length == 0) {
        nameError.innerHTML = "Name is requiered";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        nameError.innerHTML = "Write full name";
        return false;

    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
function validatePhone() {
    
    var phone = document.getElementById("contact-phone").value;

    if (phone.length == 0)  {

        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone.length !== 11)  {
        phoneError.innerHTML = "Phone number should be 11 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {

        phoneError.innerHTML = "Only digits is required";
        return false;

    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail () {

    var email = document.getElementById("contact-email").value;

    if(email.length == 0) {
        emailError.innerHTML = "Email is requiered";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        emailError.innerHTML = "Email Ivalid";
        return false;

    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage () {

    var message = document.getElementById("contact-message").value;
    var requiered = 30;
    var left = requiered - message.length;


    if(left > 0) {
        messageError.innerHTML = left + " more characters requiered";
        return false;

    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;


}
function validateForm () {
    if (!validateName()|| !validatePhone()|| !validateEmail() ||!validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error to submit";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;

    }


}


