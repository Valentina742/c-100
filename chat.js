// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
    apiKey: "AIzaSyAXbq4LcTImd4U4CYWwVKD8sbMUZLiuLDY",
    authDomain: "vamos-a-chatear-ef849.firebaseapp.com",
    projectId: "vamos-a-chatear-ef849",
    storageBucket: "vamos-a-chatear-ef849.appspot.com",
    messagingSenderId: "808087294157",
    appId: "1:808087294157:web:e2dd7f5f7c3a0749af5984"
  };
  

// Inicializar Firebase
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



