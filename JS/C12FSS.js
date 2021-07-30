
var people = [
    {
        name: 'Jerry',
        age: '30'
    },
    {
        name: 'Violet',
        age: '26'
    },
    {
        name: 'Tim',
        age: '26'
    }
];


    
function display() {
    //set up tableheader
    var msg = '<tr>' + '<th>name:' + '</th>'
    msg += '<th>age:' + '</th>' + '</tr>';

    //filtering function
    var inputTxt = document.getElementById('userInput').value;
    var results = [];
    if (inputTxt==="") {
        results = people.slice();
    } else {
        people.forEach(function (el) {
            if (el.name === inputTxt) {
                results.push(el);
                console.log(results);
            }
        });
    }

    //loop through sall data
    for (var i = 0; i < results.length; i++) {
        msg += "<tr><td>"+ results[i].name+ "</td><td>" +results[i].age+"</td></tr>";

    }

    document.getElementById("filterTable").innerHTML = msg;
}

window.onload = display;


// var images = document.getElementById('image');
// images.className = "hide";

//search function
function search(){
    var inputTxt = document.getElementById('searchIMG').value;
    img.className="hide";
}









