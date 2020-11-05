let sendBtn = document.getElementById("sendBtn")

sendBtn.addEventListener("click", () => {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPhone = document.getElementById("userPhone").value;
    let userMessage = document.getElementById("userMessage").value;
    function validateEmail($emailSign) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($emailSign);
    }
    
    if (userName === "") {
        console.log('Please enter your name')
    } else if(userEmail === ""){
        console.log('Please enter you email')
    } else if (!validateEmail(userEmail)) {
        console.log("Please enter a valid email address.")
    } else if (userMessage === "") {
        console.log("Please enter your message.")
    } else {
        var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
           }
         };
    
       xhttp.open("GET", "sendEmail.php?task=message&userName=" + userName + "&userEmail=" + userEmail + "&userPhone=" + userPhone + "&userMessage=" + userMessage, true);
       xhttp.send();
        /*$.ajax({
            url: ,
            success: function (data) {
                if (data.indexOf('sent') > -1) {
                    console.log('Email sent, thank you!')
                } else {
                    console.log("An error occurred. Please try later.")
                }
            },
            error: function (data, err) {
                console.log("There is an error. Please try again later.")
            }
        });*/
    }
})