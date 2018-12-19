      var signup = document.getElementById('signup');
      var login = document.getElementById('login');

      var signupbtn = document.getElementById("signup-btn");
      var loginbtn = document.getElementById("login-btn");


      var span = document.getElementsByClassName("close")[0];

      signupbtn.onclick = function () {
          signup.style.display = "block";
          login.style.display = "none";
      }

      span.onclick = function () {
          signup.style.display = "none";
          login.style.display = "block";
      }

      loginbtn.onclick = function () {
          login.style.display = "block";
          signup.style.display = "none";
      }
