

//helper function

function addEvent(el, event, callback) {
    if ('addEventListener' in el) {
        el.addEventListener(event, callback, false);
    } else {
        console.log('fall back IE function')
    }
}

//get form
//activate addEvent and outpostn welcome + userName to main

// (function () {
//     var form = document.getElementById("login");

//     addEvent(form, 'submit', function (e) {
//         e.preventDefault();
//         var elements = this.elements;
//         var username = elements.username.value;
//         var msg = "welcome " + username;
//         document.getElementById('main').textContent = msg;
//     })
// }());

//below click password check box, will convert password type for password to text

(function () {
    var pwd = document.getElementById("pwd");
    var chk = document.getElementById("showPwd");

    //checkbox as event, change as event, function to try to change type
    addEvent(chk, 'change', function (e) {
        // var target = e.target || e.srcElement;
        try {
            if (chk.checked) {
                pwd.type = "text";
            } else {
                pwd.type = "password"
            }
        } catch (error) {
            alert('this windows cannot switch type')
        }
    })
}());



(function () {
    //when first load disable the button
    var submit = document.getElementById("submit");
    submit.disabled = true;

    var pwd = document.getElementById("pwd");
    //if user key in password, then we enable it
    addEvent(pwd, 'input', function (e) {
        var target = e.target;
        submit.disabled = false || !target.value;
    })

    //if user has submitted, disable the whole form
    var form = document.getElementById("login");
    addEvent(form, 'submit',function(e){
        submit.disabled = true;
        e.preventDefault();
    })
}());


(function(){
    console.log('haha')


    if(all.checked){
        console.log("all has been checked")
    }
})

//f for checkbox
(function(){
    //get all others and all
    var form = document.getElementById("interests");
    var elements = form.elements;
    var options = elements.genre;
    var all = document.getElementById("all");


    //if select all, then update all
    function updateAll(){
        for(var i=0; i<options.length;i++){
            options[i].checked = all.checked;
        }
    }

    addEvent(all,'change', updateAll);
});