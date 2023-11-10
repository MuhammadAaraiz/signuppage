var firebaseConfig = {
  apiKey: "AIzaSyBoLaaV5_Ox-FnNDiUMPAn5SR03hMkvVN4",
  authDomain: "loginpage-ea236.firebaseapp.com",
  projectId: "loginpage-ea236",
  storageBucket: "loginpage-ea236.appspot.com",
  messagingSenderId: "852668776938",
  appId: "1:852668776938:web:3f1b8b3972c33fe0823293"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);



// ***************************** Sign Up Auth *******************************

function signup(){
    var signupmail =document.getElementById("signupmail")
    var signuppass = document.getElementById("signuppass")

    firebase.auth().createUserWithEmailAndPassword(signupmail.value, signuppass.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
    console.log(user)


    Swal.fire({
      title: "Successfully Signed Up Do You Want To Continue",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(" Successfully Login To The Dashboard Page ", "", "success");
    signupmail.value=""
    signuppass.value=""
    setTimeout(function () {
      window.location.href = "index6.html";
    }, 3000);
      } else if (result.isDenied) {
        Swal.fire("Not Signed Up To The Dashboard Page", "", "info");
      }
    });
    

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.fire(errorMessage);
    });
}



// ***************************** Sign in Auth*******************************

function signin(){

var signinmail =document.getElementById("signinmail")
var signinpass = document.getElementById("signinpass")


firebase.auth().signInWithEmailAndPassword(signinmail.value, signinpass.value)
  .then((userCredential) => {

    var user = userCredential.user;
    console.log(user)


Swal.fire({
  title: "Do You Want To Continue To The Dashboard Page ",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(" Successfully Login To The Dashboard Page ", "", "success");
signinmail.value=""
signinpass.value=""

setTimeout(function () {
  window.location.href = "index6.html";
}, 2000);
  } else if (result.isDenied) {
    Swal.fire("Not Login Try Again ", "", "info");
  }
});





  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    



  });
}



// ***************************** Forget Password Auth *******************************

function forgetpass(){
    
var signinmail =document.getElementById("signinmail")


firebase.auth().sendPasswordResetEmail(signinmail.value)
  .then(() => {
    // Password reset email sent!
    alert("Email verification Sent")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}






// ***************************** Google Auth *******************************

function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }



  function github(){
    
  var provider = new firebase.auth.GithubAuthProvider();




  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  






}























var container = document.getElementById("container")

var register = document.getElementById("register")

var login = document.getElementById("login")




function signupbtn(){ 
    container.classList.add ("active")
}



function loginbtn(){
    container.classList.remove("active")
}

function  dashbtn(){
  window.location.href = "index.html";
}





  
function showpass () {
  var signuppassword=document.getElementById("signuppass")
  var button = document.getElementById("myButton");

  if (signuppassword.type ==="password", button.innerHTML === "Show Password") {
    button.innerHTML = "Hide Password";
    signuppassword.type = "text"; 

  } else {
    button.innerHTML = "Show Password";
    signuppassword.type = "password"

  }
}

 



function showpassword () {
  var signuppassword=document.getElementById("signinpass")
  var button = document.getElementById("myButton1");

  if (signuppassword.type==="password",button.innerHTML === "Show Password")
  {
   signuppassword.type = "text"; 
   button.innerHTML = "Hide Password";
  }
   else{
    signuppassword.type = "password"
    button.innerHTML = "Show Password";
   }
  
}