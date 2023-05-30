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


  //var i =0;
//var fruit;
var image = document.getElementById("apple");
image.style.backgroundImage = "url('media/1.jpg')";
// image.style.objectFit = 'cover';
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundImage.size ="cover";

// function cycle()
// {
//  i+=1;
//   document.getElementById("apple").src=fruit;
//   if (i>2) {i=-1};
// }

// document.getElementById("nav").style.backgroundColor =  "green";
  //document.getElementById("this").style.backgroundImage =  "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D0.752xw%3A1.00xh%3B0.175xw%2C0%26resize%3D1200%3A*&tbnid=PpmCvrB3OtU3hM&vet=12ahUKEwiPlLm-yIX-AhXDpCcCHdWRDp4QMygAegUIARDbAQ..i&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&docid=2r6Arj4-hBjhNM&w=1200&h=1197&q=dogs&ved=2ahUKEwiPlLm-yIX-AhXDpCcCHdWRDp4QMygAegUIARDbAQ')";

  function myFunction(number) {
    if(number === 1){
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");
    } /* else if(number === 2){
      var dots = document.getElementById("dots2");
      var moreText = document.getElementById("more2");
      var btnText = document.getElementById("myBtn2");
    }else if (number === 3) {
      var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
      
    }*/
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
 
  
//  open Enrollment on a new window

// JS code that opens the game page on a new window
document.getElementById('enrollmentID').addEventListener('click', this.openWindow);

  function openWindow(ev){
    console.log('open a popup window');
    let gameWindow=window.open('Enrolment.html', null, 'popup, width=1000, height=800, left=200, top=30')
  }

