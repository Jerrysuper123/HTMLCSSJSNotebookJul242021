
//html event handler
// function checkUsername(){
//     var feedback = document.getElementById("feedback");
//     var userName = document.getElementById('userName')
//     // above only gets the node. so need to say node.value
//     if(userName.value.length<5){
//         feedback.textContent = "userName less than 5 char"
//     } else{
//         feedback.textContent='';
//     }
// }

// dom event handler
// function checkUsername(){
//     var feedback = document.getElementById("feedback");
    
//     // above only gets the node. so need to say node.value
//     if(userName.value.length<5){
//         feedback.textContent = "userName less than 5 char"
//     } else{
//         feedback.textContent='';
//     }
// }

// var userName = document.getElementById('userName')
// userName.onblur = checkUsername;

//add event listener
// function checkUsername(){
//     var feedback = document.getElementById("feedback");
    
//     // above only gets the node. so need to say node.value
//     if(userName.value.length<5){
//         feedback.textContent = "userName less than 5 char"
//     } else{
//         feedback.textContent='';
//     }
// }


// var userName = document.getElementById('userName')
// userName.addEventListener('blur',checkUsername,false);

// //event listener function with argument
// function checkUsername(e, ml){
//     var target = e.target;
//     var feedback = document.getElementById("feedback");
    
//     // above only gets the node. so need to say node.value
//     if(userName.value.length<ml){
//         feedback.textContent = "userName less than" + ml + " char"
//     } else{
//         feedback.textContent='';
//     }
// }

// var userName = document.getElementById('userName')
// userName.addEventListener('blur',function(e){checkUsername(e,5)},false);

//prevent event default
// function prevent(e){
//     e.preventDefault();
// }

// var submitButton = document.getElementById("submitButton");
// submitButton.addEventListener('click',function(e){prevent(e)},false);

//load event

function setup(){
    var input = document.getElementById('userName');
    input.focus();
}

window.addEventListener("load",setup,false);

// function countChar(){
//     var enteredText = documet.getElementById("userName").value;
//     var count = enteredText.length;
//     document.getElementById("feedback").textContent=count;
// }

// var el = document.getElementById("userName");
// el.addEventListener('keypress',countChar,false)