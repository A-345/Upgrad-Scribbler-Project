/* signin Model */
var signInModal =
    '<div id="signinModal" class="modal">' +
    '<div id="modal-content">' +
    '  <div class="modal-header">' +
    '    <div class="close">&times;</div>' +
    '    <h2 class="modal-heading">Welcome Back!</h2>' +
    '    <hr>' +
    '  </div>' +
    '  <div class="modal-body">' +
    '    <div class="signin-modal">' +
    '      <form method="post" onsubmit="event.preventDefault(); myValidation();">' +
    '      <div class="signin-option">' +
    '          <label for="username-signin" class="labels">Username</label> <br>' +
    '          <input type="text" id="username-signin" placeholder="Enter Username" required>' +
    `        </div>` +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">Password</label><br>' +
    '          <input type="password" id="password-signin" placeholder="Enter Password" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <button class="signin-button" type="submit">Sign In</button>' +
    '        </div>' +
    '        <div class="not-member">' +
    '          <span id="yes">Not a member?</span>' +
    '         <span id="show-signup"> <a href="#">Sign Up</a></span>' +
    '       </div>' +
    '     </form>' +
    '   </div>' +
    ' </div>' +
    ' <div class="modal-footer">' +
    '  </div>' +
    '</div>' +
    '</div>'

/*Signup Model */
var signUpModal =
    '<div id="signupModal" class="modal">' +
    '<div id="modal-content">' +
    '  <div class="modal-header">' +
    '    <div class="close">&times;</div>' +
    '    <h2 class="modal-heading">Get Started</h2>' +
    '    <hr>' +
    '  </div>' +
    '  <div class="modal-body">' +
    '    <div class="signup-modal">' +
    `      <form method="post" onsubmit="event.preventDefault(); myValidation();">` +
    '        <div class="signup-option">' +
    '          <label for="fullname" class="labels">Full Name</label> <br>' +
    '          <input type="text" id="fullname" placeholder="Enter Full Name" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="username-signup" class="labels">Username<br>' +
    '            <input type="text" id="username-signup" placeholder="Enter Username" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="password-signup" class="labels">Password</label><br>' +
    '         <input type="password" id="password-signup" placeholder="Enter Password" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="conpassword-signup" class="labels">Confirm Password</label><br>' +
    '          <input type="password" id="conpassword-signup" placeholder="Confirm Password" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <button class="signup-button" type="submit">Sign Up</button>' +
    '        </div>' +
    '      </form>' +
    '    </div>' +
    '  </div>' +
    '  <div class="modal-footer">' +
    ' </div>' +
    '</div>' +
    '</div>'

/* mainparent-signin and mainparent-signup are div which contain modals*/
document.getElementById("mainparent-signin").innerHTML = signInModal;
document.getElementById("mainparent-signup").innerHTML = signUpModal;


var signInButton = document.getElementById("signin");
const closeSignInButton = document.getElementsByClassName("close")[0];
const closeSignUpButton = document.getElementsByClassName("close")[1];
const closeCreatePostButton = document.getElementsByClassName("close")[2];
var signInModal = document.getElementById("signinModal");
var signUpButton = document.getElementById("signup");
var signUpModal = document.getElementById("signupModal");
var signUpLink = document.getElementById("show-signup");
var penPostModal = document.getElementById("penPostModal");
var createPostButton = document.getElementById("button2");
var textarea = document.getElementById("Content");

function showSignInModal() {
    signInModal.style.display = "block";
}

function showSignUpModal() {
    signUpModal.style.display = "block";
}

function showCreatePostModal() {
    penPostModal.style.display = "block";
}

signInButton.addEventListener("click", showSignInModal);
signUpButton.addEventListener("click", showSignUpModal);
try {
    createPostButton.addEventListener("click", showCreatePostModal);
}
catch (e) {
}

if (signUpLink.addEventListener("click", showSignUpModal)) {
    hideModal();
};

function hideModal() {
    signInModal.style.display = "none";
    signUpModal.style.display = "none";
    try {
        penPostModal.style.display = "none";
    }
    catch (e) {

    }
}


closeSignInButton.onclick = hideModal;
closeSignUpButton.onclick = hideModal;
try {
    closeCreatePostButton.onclick = hideModal;
}
catch (e) {
}

window.onclick = function (event) {
    if (event.target == signInModal)
        signInModal.style.display = "none";
    else if (event.target == signUpModal)
        signUpModal.style.display = "none";
    else if (event.target == penPostModal)
        penPostModal.style.display = "none";
}

function myValidation() {
    return false;
}
