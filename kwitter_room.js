
/* https://console.firebase.google.com/project/project94-273e2/database/project94-273e2-default-rtdb/data/~2F */


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

   });});}
getData();
