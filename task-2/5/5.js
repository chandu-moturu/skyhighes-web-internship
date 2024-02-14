
function Show()
{
    document.getElementById("authentication").reset();
};

function Verify() {
  var userRef = "Chandrasekhar";
  var passRef = "123chandu";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
  alert("Connexion")
  } else {
  alert("Wrong Username/Password...")
  }
};