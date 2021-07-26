//get first element, change classname to cool
// document.getElementById("one").className="cool";

// below gets all hot className, and change index 2 to cool
// // you cannot access item 2, becuase in memoery, 1 has to updated to cool, 
// //so there are only 2 items

// var elements = document.getElementsByClassName("hot");

// var el = elements.item(1);
// el.className = "cool";

// var elements = document.getElementsByTagName("li");
// if(elements.length>2){
//     var el =elements[2];
//     el.className = "cool";
// }

// query all and select tag li with hot class
// var els = document.querySelectorAll('li.hot');
// // els[0].className='cool';
// //loop through all 
// if(els.length>0){
//     for(var i=0; i<els.length;i++){
//         els[i].className="cool";
//     }
// }

// traverse the dom
// var startChild = document.getElementById("two");
// startChild.className="cool";
// var previousItem = startChild.previousElementSibling;
// previousItem.className='complete';

//last child
// var start = document.getElementsByTagName('ul')[0];
// var first = start.firstElementChild;
// first.setAttribute('class','complete')

//use nodeValue to update something
// var itemTwo = document.getElementById("two");
// itemTwo.firstChild.nodeValue="tom";

//use textContent and innerText
// var itemTwo = document.getElementById("one");
// itemTwo.innerText="jerry";

//use createElement, textNode and appendchild

// var el = document.createElement('li');
// var text = document.createTextNode('quinoa');
// el.appendChild(text);
// document.getElementsByTagName('ul')[0].appendChild(el);

// //remove element
// var removeOne = document.getElementById("one");
// var parent = removeOne.parentNode;
// parent.removeChild(removeOne);

//attributes, get, set, has, remove
var attribute = document.getElementById("one").getAttribute('class');
document.getElementById("two").textContent = attribute;
document.getElementById("three").setAttribute('class',"complete");