import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
        
        const firebaseConfig = {
          apiKey: "AIzaSyDbUxVuKSsgv3RJuTUAv2iI1F48tYEEibU",
          authDomain: "hovedoppgave-826e9.firebaseapp.com",
          projectId: "hovedoppgave-826e9",
          storageBucket: "hovedoppgave-826e9.appspot.com",
          messagingSenderId: "1018171090960",
          appId: "1:1018171090960:web:33da57710a7a48b9e14295"
        };

       
        
          
        
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        
        const submitButton = document.getElementById("submit");
        const signupButton = document.getElementById("sign-up");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const main = document.getElementById("main");
        const createacct = document.getElementById("create-acct")
        
        const signupEmailIn = document.getElementById("email-signup");
        const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
        const signupPasswordIn = document.getElementById("password-signup");
        const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
        const createacctbtn = document.getElementById("create-acct-btn");
        
        const returnBtn = document.getElementById("return-btn");
        
        var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;
        
        createacctbtn.addEventListener("click", function() {
          var isVerified = true;
        
          signupEmail = signupEmailIn.value;
          confirmSignupEmail = confirmSignupEmailIn.value;
          if(signupEmail != confirmSignupEmail) {
              window.alert("Email fields do not match. Try again.")
              isVerified = false;
          }
        
          signupPassword = signupPasswordIn.value;
          confirmSignUpPassword = confirmSignUpPasswordIn.value;
          if(signupPassword != confirmSignUpPassword) {
              window.alert("Password fields do not match. Try again.")
              isVerified = false;
          }
          
          if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
            window.alert("Please fill out all required fields.");
            isVerified = false;
          }
          
          if(isVerified) {
            createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
              .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              window.alert("Success! Account created.");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              window.alert("Error occurred. Try again.");
            });
          }
        });
        
        submitButton.addEventListener("click", function() {
          email = emailInput.value;
          console.log(email);
          password = passwordInput.value;
          console.log(password);
        
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              window.location.assign("lagring.html");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("Error occurred. Try again.");
              window.alert("Error occurred. Try again.");
            });
        });
        
        signupButton.addEventListener("click", function() {
            main.style.display = "none";
            createacct.style.display = "block";
        });
        
        returnBtn.addEventListener("click", function() {
            main.style.display = "block";
            createacct.style.display = "none";
        });
        
        

  