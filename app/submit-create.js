// $(document).ready(function(){
//     $('#create').on ('submit', ( function(e) {
//         console.log( $('#create').val());
//         e.preventDefault();
//     }))
// });



// // add /delet script
// // maximum inputs allowed
// var max_boxes = 10;
// // where it will sit
// var wrapper = $(".add-input");

// // add dutton id
// var add_button = $(".create-add one");
// // amount of text boxes added per click
// var x = 1;

// $(add_button).click((e) => {
//     e.preventDefault();
//     //  maximum inputs allowed
//  if(x<max_fields) { 
// // amount of text boxes added per click
//     x++;
//     $(wrapper).append('<div class=" wrapper"><input type="text" placeholder="Ingredients #3" class="add-input"><button class="create-add one"><i class="bx  plus-icon"></i></button></div>');
//  }
// });

// $(wrapper).on("click",".remove", (e)=> {
//     e.preventDefault();
//     $(this).parent()
// })

// function initSubmitListener() {
//     $("#submit").on("click",function () {
//    console.log("submit");
//    let fc = (".add-input-text").val();

//    if (fn == "") {
//     alert("enter data");
//    }
//    else {
//     alert("enter ingredients to get data");

//    }

// });

 
//  function addBox() {
  
//     }
//     //change this plus btn to delete button
//      $(this).closest('input').html('<div class=" wrapper"><input type="text" placeholder="Ingredients #3" class="add-input"><button type="button"  onclick="addBoxes()" class="add-row-button"><i class="bx  plus-icon"></i></button> </div> ')


// }
// function InitListener(){

    // $(document).ready(function() {
    //     var ingCont = 3;
    //     var stepCnt = 3;
    //     var max_boxes      = 10; //maximum input boxes allowed
    //     var wrapper         = $("#wrapper"); //Fields wrapper
    //     var addButton      = $("#add"); //Add button ID
       
    //     var x = 1; //initlal text box count
        
        
    //    $("#addButton").on("click",(e) =>{ //on add input button click
    //         e.preventDefault();
    //         if(ingCont < max_boxes){ //max input box allowed
        
    //              //text box increment
    //             $("#wrapper").append(`<input type="textarea" id="ingredients${ingCont}" placeholder="Ingredients #${ingCont + 1}" class="add-input">`); //add input box
    //             ingCont++; 
    //       }
    //     });
    
    
    //    $("#addBtn").on("click",(e) =>{ //on add input button click
    //     e.preventDefault();
    //     if(ingCont < max_boxes){ //max input box allowed
    
    //          //text box increment
    //         $("#wrapper").append(`<input type="textarea" id="ingredients${stepCnt}" placeholder="Ingredients #${stepCnt + 1}" class="add-input">`); //add input box
    //         stepCnt++; 
    //   }
    // });
       

    // });
// }    