function sendMail(params) {
  var tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('gmail','first-template',tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}
