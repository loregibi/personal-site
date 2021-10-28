function sendMail(params) {
  var tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("object").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('gmail','template',tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}
