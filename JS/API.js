
var locNode = document.getElementById('loc');
var message = "unable to retrieve your location";

//try is geolocation existed

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(success, fail);
//     locNode.textContent = "checking ...location";
// } else{
//     locNode.textContent = message;
// }

// function success(postion){
//     msg = '<h3>longtitude:</h3><br/>'
//     msg += postion.coords.longitude;
//     locNode.innerHTML = msg;
// }

// function fail(msg){
//     locNode.textContent = msg;
// }

//location storage
// localStorage.setItem('name', 'jerry');
// var name = localStorage.getItem('name');
// document.getElementById('local').textContent = name;

// //get the node, setItem, and getItem when input changes
// if(window.localStorage){
//     var textInput = document.getElementById('userName');
//     var textOutput = document.getElementById("output");

//     textInput.addEventListener('input', function(){
//         localStorage.setItem("userName", textInput.value);
//     }, false);

//     textInput.value = localStorage.getItem("userName")
// }
//sessions storage
if(window.sessionStorage){
    var textInput = document.getElementById('userName');
    var textOutput = document.getElementById("output");

    textInput.addEventListener('input', function(){
        sessionStorage.setItem("userName", textInput.value);
    }, false);

    textOutput.textContent = sessionStorage.getItem("userName")
}