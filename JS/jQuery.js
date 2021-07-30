
// $("li.hot").addClass('complete');

// //chaining
// $('li[id!="one"]').hide().delay(500).fadeIn(1400);

// //changing content
// $(function(){
//     $('li:contains("pine")').text('almond');
// });

// //adding new element
// $(function(){
//     var text = "<li>Jerry Chen </li>";
//     $('li:last').after(text);
// });

//using each
// $(function(){
//     $('li').each(function(){
//         var id = this.id;
//         $(this).append("<span>"+id+"</span>")
//     })
// })

//events - mouseover
$(document).ready(function(){
    $("li").click(function(){
      $(this).fadeOut(700);
    });
  });

