function validateForm() {
  
    var username = document.forms["register"]["username"].value;
    var password = document.forms["register"]["password"].value;
    if (username == null || username == "") {
        alert("Please enter all credentials");
        return false;
    }

   else if (password == null || password == "") {
    alert("Please enter all credentials");
   return false;
}

    else
    var p = document.getElementById("congratulations");
    p.style.display = "block"; 
    return false;
}


function displaySong2() {
  var p = document.getElementById("hired");
  p.style.display = "block";  	 
}

function checkPassword(){
  let password = document.getElementById("password").value;
  let cnfrmPassword = document.getElementById("cnfrm-password").value;
  let message = document.getElementById("message");
  console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);

  if(password.length != 0){
      if(password == cnfrmPassword){
          message.textContent = "You are all signed up!";
          message.style.backgroundColor = "#1dcd59";
          
      }
      else{
          message.textContent = "Sorry, Password don't match";
          message.style.backgroundColor = "#ff4d4d";
      }
  }
  else{
      alert("Password can't be empty!");
      message.textContent = "";
  }
}


//this outlines that the bike has been rented and is ready to pick up from location.
// electric scooters will have the same model as companies like Flamingo and Beam, where the scooters will be scattered 
// around town for people to rent on location. So cannot be rented through the website, and will be paired with an app.


function checkbiketype(){
  let bikes = document.getElementById("bikes").value;
  let elecscoot = document.getElementById("elecscoot").value;
  let message = document.getElementById("message2");
  console.log("Choose a bike:", bikes,'\n',"Electric Scooter", elecscoot);

  {
      if(bikes == elecscoot){
          message.textContent = "Electric scooter can only be rented from app!";
          message.style.backgroundColor = "#ff4d4d";
          
      }

      else{
        message.textContent = "Rented!";
        message.style.backgroundColor = "#1dcd59";
    }

     
    }
  }