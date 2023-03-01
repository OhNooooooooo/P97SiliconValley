function logout(){
    window.location = "index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyCDy4chJKKmjOiv0Bcw4LuNUTJjTCaDs9w",
    authDomain: "testdatabase-af201.firebaseapp.com",
    databaseURL: "https://testdatabase-af201-default-rtdb.firebaseio.com",
    projectId: "testdatabase-af201",
    storageBucket: "testdatabase-af201.appspot.com",
    messagingSenderId: "65005002496",
    appId: "1:65005002496:web:0c898cfe4c3945a9101de5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  ee="e";
function getData() { firebase.database().ref("/"+ee).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";

row = name_with_tag+message_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(ee).push({
          name:user_name,
          message:msg,
    });
    document.getElementById("msg").value = ""
}