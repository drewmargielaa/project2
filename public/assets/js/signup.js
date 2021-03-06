$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("input#firstName-input");
  var lastNameInput = $("input#lastName-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    // signUpUser(userData.email, userData.password);
    // emailInput.val("");
    // passwordInput.val("");
    signUpUser(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(user) {
  // function signUpUser(email, password) {
    $.post("/api/signup", {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    })
      .then(function(user) {
        window.location.replace("/member");
        console.log("signup.js linija 33")
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
