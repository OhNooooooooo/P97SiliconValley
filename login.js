row = "<h3 id='error'>Wrong Password, please try again!</h3>";
function signup(){
if ((localStorage.getItem("user_name")==document.getElementById("user_name").innerHTML)&&(localStorage.getItem("password")==document.getElementById("password").innerHTML)) {
        window.location="saferoom.html";
}else{
    document.getElementById("output").innerHTML+=row;
    document.getElementById("user_name").innerHTML+="";
    document.getElementById("password").innerHTML+="";
  }}
