
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxGHAy5w12m_0PfHdypnKGdiDdupwHQbU",
    authDomain: "kwitter-d6b6c.firebaseapp.com",
    databaseURL: "https://kwitter-d6b6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6b6c",
    storageBucket: "kwitter-d6b6c.appspot.com",
    messagingSenderId: "529003978973",
    appId: "1:529003978973:web:64ebe57a6422fde70afb34",
    measurementId: "G-Q6VK81VXCE"
  };
  
  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -"+Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location ="chat_room.html";
}

firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });