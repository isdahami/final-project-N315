// $("#next").click(function () {
//   dataVal++;
//   $("#previous").removeClass('hidden');
//   dataVal == $(".idrow[data-questions]").length-1 ? $(this).addClass('hidden') : $(this).removeClass('hidden');
//   ShowTheelement(dataVal);
//   if (dataVal == $(".idrow[data-questions]").length-1) {
//     $("#submit").removeClass('hidden');
//   }
// });

// $("#previous").click(function () {
//   dataVal--;
//   $("#next").removeClass('hidden');
//   dataVal == 0 ? $(this).addClass('hidden') : $(this).removeClass('hidden');
//   ShowTheelement(dataVal);
//   if (dataVal == $(".idrow[data-questions]").length-2) {
//     $("#submit").addClass('hidden');
//   }
// });




export function changePage(pageID, subPage ) {
    // goes into pages folder to find the page user clicks on
      $.get(`pages/${pageID}.html`, function(data) {
        // injects HTML onto the page
        $("#app").html(data); 
        console.log(pageID)
        // $("#nav").html(data);
  });
};

// export function addBox() {
//   $("create-add").on("click", function (e) {
// // body...
// console.log("clone");

// $(".clone").clone().find('input').val('').end().find('textarea').val('').end().appendTo('#wrapper-clone');
// }
//   );
//   }
// $("#next").click(function () {
//   dataVal++;
//   $("#previous").removeClass('hidden');
//   dataVal == $(".idrow[data-questions]").length-1 ? $(this).addClass('hidden') : $(this).removeClass('hidden');
//   ShowTheelement(dataVal);
//   if (dataVal == $(".idrow[data-questions]").length-1) {
//     $("#submit").removeClass('hidden');
//   }
// });

// $("#previous").click(function () {
//   dataVal--;
//   $("#next").removeClass('hidden');
//   dataVal == 0 ? $(this).addClass('hidden') : $(this).removeClass('hidden');
//   ShowTheelement(dataVal);
//   if (dataVal == $(".idrow[data-questions]").length-2) {
//     $("#submit").addClass('hidden');
//   }
// });




// export function changePage(pageID, subPage ) {
//   // goes into pages folder to find the page user clicks on
//     $.get`pages/${pageID}.html`, function(data) {
//       // injects HTML onto the page
//       $("#app").html(data); 
//     } else if (pageID == ".recipe" {
//         $get.`page/${pageID}.html`,
//         function (data) {
//           console.log("data" + data);
//           $("#app").html(data);
//         )
        
    
//       console.log(pageID);
//       // $("#nav").html(data);
// });
// };
