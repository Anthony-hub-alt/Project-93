var firebaseConfig = {
      apiKey: "AIzaSyBdrb3s1sDlqujZcjub54QBUc_b80TCHYU",
      authDomain: "kwitter-6791b.firebaseapp.com",
      databaseURL: "https://kwitter-6791b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6791b",
      storageBucket: "kwitter-6791b.appspot.com",
      messagingSenderId: "57359902021",
      appId: "1:57359902021:web:0673f27dbb4abc6b7eca2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
