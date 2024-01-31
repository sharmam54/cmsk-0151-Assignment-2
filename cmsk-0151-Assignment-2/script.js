const nameError = document.getElementById('name-error404')
const emailError = document.getElementById('email-error404')
const phoneError = document.getElementById('phone-error404')
const submitError = document.getElementById('submit-error404')


function Name() {
    const name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";   
        return false;
    }     
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write your full name"
        return false;
    }
    nameError.innerHTML = "Valid";
    nameError.style.color = "green";
    return true; 

}

function Email() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error404');

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        return false;
    }

    // Updated regex for better email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Email invalid";
        emailError.style.color = "blue";
        return false;
    }

      emailError.innerHTML = "Valid";
  emailError.style.color = "green";
  return true;

}



function Phone() {
    const phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "phone is required"
        phoneError.style.color = "red";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no. should be 10 digits"
        phoneError.style.color = "red";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please."
        return false;
    }

    phoneError.innerHTML = "Valid"
    phoneError.style.color = "green";
    return true
}



function Form() {
    if(!Name() || !Phone() || !Email() ){
        
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix errors to submit.";

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);

        return false;
    }
}
