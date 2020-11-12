let sendBtn = document.getElementById("sendBtn")
let form = document.getElementById("emailForm")
sendBtn.addEventListener("click", () => {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPhone = document.getElementById("userPhone").value;
  let userMessage = document.getElementById("userMessage").value;

  function validateEmail($emailSign) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($emailSign);
  }

  if (userName === "") {
    Toastify({
      text: "Please enter your name",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #ff0000, #b80000)",
      stopOnFocus: true,
    }).showToast();
  } else if (userEmail === "") {
    Toastify({
      text: "Please enter you email",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #ff0000, #b80000)",
      stopOnFocus: true,
    }).showToast();
  } else if (!validateEmail(userEmail)) {
    Toastify({
      text: "Please enter a valid email address.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #ff7b00, #b86e00)",
      stopOnFocus: true,
    }).showToast();
  } else if (userMessage === "") {
    Toastify({
      text: "Please enter your message.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #ff0000, #b80000)",
      stopOnFocus: true,
    }).showToast();
  } else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = this.responseText
        if (response.indexOf("sent") > -1) {
          document.getElementById("userName").value = ""
          document.getElementById("userEmail").value = ""
          document.getElementById("userPhone").value = ""
          document.getElementById("userMessage").value = ""
          Toastify({
            text: "Thank you",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "linear-gradient(to right, #5bfc49, #45ad00)",
            stopOnFocus: true,
          }).showToast();
        } else {
          Toastify({
            text: "There is some problem. Please try again later.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "linear-gradient(to right, #ff0000, #b80000)",
            stopOnFocus: true,
          }).showToast();
        }
      }
    };

    xhttp.open("GET", "sendEmail.php?task=message&userName=" + userName + "&userEmail=" + userEmail + "&userPhone=" + userPhone + "&userMessage=" + userMessage, true);
    xhttp.send();
  }
})
