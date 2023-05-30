

// Form Validation

let popup = document.getElementById("popup");
function openPopup(){
  if(document.footerForm.name.value==""){
    document.footerForm.name.focus()
    return false
  }
  else if (document.footerForm.email.value==""){
    document.footerForm.email.focus()
    return false
  }
  else if (document.footerForm.phone.value==""){
    document.footerForm.phone.focus()
    return false
  }
  else if (document.footerForm.message.value==""){
    document.footerForm.message.focus()
    return false
  }
  else{
    // popup.classList.add("openPopup");
    alert('Your message has been submitted')

  }
}


function closePopup(){
    popup.classList.remove("openPopup");
}


//  open Enrollment on a new window 

// JS code that opens the game page on a new window
document.getElementById('enrollmentID').addEventListener('click', this.openWindow);

  function openWindow(ev){
    console.log('open a popup window');
    let gameWindow=window.open('Enrolment.html', null, 'popup, width=1000, height=800, left=200, top=30')
  }
