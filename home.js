function formValidation(event) {

}

document.getElementById('submitBtn').addEventListener('click', e => {
    // Add an event listener to the form's submit button
  // Check if all required fields are filled

  e.preventDefault(); // Prevent the form from submitting
  // const requiredFields = form.querySelectorAll("[required]");
    let isFormFilled = true;
  // requiredFields.forEach((field) => {
  //   if (!field.value) {
  //     isFormFilled = false;
  //   }
  // });

  var name = document.getElementById('name').value;
  console.log(name);
  var email =  document.getElementById('email').value;
  var comment =  document.getElementById('comment').value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
  var name = /\d+$/g; // Javascript reGex for Name validation

  if (name == "") {
    // name.focus();
    isFormFilled = false;
  }
  if (email == "") {
    isFormFilled = false;
  }
  if (!emailReg.test(email)) {
    // email.focus();
    isFormFilled = false;
  }

  if (!isFormFilled) {
    alert("please fill all");
    return;
  }

  alert("Successfully Submitted");
  window.location.reload()
  return true;
  })


  

  document.getElementById('contactID').addEventListener('click', this.openWindow);

  function openWindow(ev){
    console.log('open a popup window');
    let gameWindow=window.open('Contact.html', null, 'popup, width=1000, height=700, left=300, top=50')
  }