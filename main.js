
function addUser() {
   if (player1_name="") {
    window.alert("PLEASE ENTER USER ID PLAYER1")
   } else {
    player1_name = document.getElementById("player1_name_input").value;
    localStorage.setItem("player1_name", player1_name);
   }
   if (player2_name="") {
    window.alert("PLEASE ENTER USER ID PLAYER2")
   } else {
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player2_name", player2_name);
   }
    window.location = "index - Copy.html";
  }
  